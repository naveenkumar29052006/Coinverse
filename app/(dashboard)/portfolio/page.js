"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Plus, Edit2, Trash2, TrendingUp, TrendingDown, PieChart, Wallet, Calendar, DollarSign, Text } from 'lucide-react';
import { cn, formatCurrency, formatCompactNumber } from '@/lib/utils';
import { useCoins } from '@/context/CoinContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Portfolio = () => {
    const { authenticated, loading: authLoading, token } = useAuth();
    const router = useRouter();
    const { coins, loading: coinsLoading } = useCoins();

    const [showModal, setShowModal] = useState(false);
    const [portfolio, setPortfolio] = useState([]);
    const [selectedCoinId, setSelectedCoinId] = useState(null); // Store ID only
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [notes, setNotes] = useState("");
    const [editIdx, setEditIdx] = useState(null);
    const [sortBy, setSortBy] = useState("date");
    const [sortDir, setSortDir] = useState("desc");
    const [chartRange, setChartRange] = useState("ALL");

    // Fetch Portfolio
    useEffect(() => {
        if (authenticated && token) {
            fetch('/api/portfolio', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => res.json())
                .then(data => setPortfolio(data))
                .catch(err => console.error("Failed to fetch portfolio:", err));
        }
    }, [authenticated, token]);

    // Live Chart State
    const [liveHistory, setLiveHistory] = useState([]);
    const [liveWindow, setLiveWindow] = useState("1s"); // "1s", "10s", "1m" (controlled windows)

    // Derived state to get current coin object from context
    const getCoinParams = (id) => coins.find(c => c.id === id) || null;

    // Coin Options for Select
    const coinOptions = useMemo(() => coins.map(coin => ({
        value: coin.id,
        label: coin.name,
        image: coin.image,
        symbol: coin.symbol.toUpperCase(),
        current_price: coin.current_price
    })), [coins]);

    const selectedCoinOption = useMemo(() =>
        coinOptions.find(o => o.value === selectedCoinId) || null
        , [selectedCoinId, coinOptions]);

    // Update form price when coin selected
    useEffect(() => {
        if (selectedCoinOption) {
            setPrice(selectedCoinOption.current_price);
        }
    }, [selectedCoinOption]);

    // Calculate Real-Time Portfolio Value
    const currentPortfolioValue = useMemo(() => {
        return portfolio.reduce((total, tx) => {
            const liveCoin = getCoinParams(tx.coinId);
            const currentPrice = liveCoin ? liveCoin.current_price : tx.purchasePrice; // Fallback
            return total + (currentPrice * tx.quantity);
        }, 0);
    }, [portfolio, coins]);

    // Record Live Data Every Second
    useEffect(() => {
        if (portfolio.length === 0) return;

        const interval = setInterval(() => {
            const now = new Date();
            const newDataPoint = {
                time: now.getTime(), // Timestamp for sorting/filtering
                date: now.toLocaleTimeString(),
                value: currentPortfolioValue
            };

            setLiveHistory(prev => {
                // Keep last 1000 points to avoid memory issues
                const newHistory = [...prev, newDataPoint];
                if (newHistory.length > 1000) return newHistory.slice(newHistory.length - 1000);
                return newHistory;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [currentPortfolioValue, portfolio.length]);

    // Filter Chart Data based on Window
    const chartData = useMemo(() => {
        if (liveHistory.length === 0) return [];
        const now = Date.now();
        let startTime = 0;

        switch (liveWindow) {
            case "30s": startTime = now - 30 * 1000; break;
            case "1m": startTime = now - 60 * 1000; break;
            case "10m": startTime = now - 10 * 60 * 1000; break;
            case "1M": startTime = now - 30 * 24 * 60 * 60 * 1000; break;
            case "3M": startTime = now - 90 * 24 * 60 * 60 * 1000; break;
            case "1Y": startTime = now - 365 * 24 * 60 * 60 * 1000; break;
            default: startTime = now - 60 * 1000;
        }

        return liveHistory.filter(pt => pt.time >= startTime);
    }, [liveHistory, liveWindow]);

    const handleAddTransaction = async (e) => {
        e.preventDefault();
        if (!selectedCoinId || !price || !quantity || isNaN(price) || isNaN(quantity)) return;

        try {
            const res = await fetch('/api/portfolio/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    coinId: selectedCoinId,
                    purchasePrice: parseFloat(price),
                    quantity: parseFloat(quantity),
                    date,
                    notes
                })
            });

            if (!res.ok) throw new Error('Failed to add transaction');

            const newTx = await res.json();
            setPortfolio([...portfolio, newTx]);
            resetForm();
        } catch (error) {
            console.error(error);
            alert('Failed to save transaction');
        }
    };

    const resetForm = () => {
        setSelectedCoinId(null);
        setPrice("");
        setQuantity("");
        setDate(new Date().toISOString().slice(0, 10));
        setNotes("");
        setShowModal(false);
        setEditIdx(null);
    };

    const handleDelete = (idx) => {
        setPortfolio(portfolio.filter((_, i) => i !== idx));
    };

    const handleEdit = (idx) => {
        const tx = portfolio[idx];
        setSelectedCoinId(tx.coinId);
        setPrice(tx.purchasePrice);
        setQuantity(tx.quantity);
        setDate(tx.date);
        setNotes(tx.notes);
        setEditIdx(idx);
        setShowModal(true);
    };

    // Sort logic for table (using live data)
    const sortedPortfolio = [...portfolio].sort((a, b) => {
        const coinA = getCoinParams(a.coinId) || {};
        const coinB = getCoinParams(b.coinId) || {};
        const priceA = coinA.current_price || a.purchasePrice;
        const priceB = coinB.current_price || b.purchasePrice;

        let aVal, bVal;
        switch (sortBy) {
            case "coin": aVal = coinA.symbol || ""; bVal = coinB.symbol || ""; break;
            case "profit":
                aVal = (priceA * a.quantity) - (a.purchasePrice * a.quantity);
                bVal = (priceB * b.quantity) - (b.purchasePrice * b.quantity);
                break;
            case "value":
                aVal = priceA * a.quantity;
                bVal = priceB * b.quantity;
                break;
            case "qty":
                aVal = a.quantity;
                bVal = b.quantity;
                break;
            case "date": default: aVal = a.date; bVal = b.date;
        }

        if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
        return 0;
    });

    // Calculate Total P/L and Total Value
    const { totalValue, totalPL } = portfolio.reduce((acc, tx) => {
        const coin = getCoinParams(tx.coinId);
        const currentPrice = coin ? coin.current_price : tx.purchasePrice;
        const currentValue = currentPrice * tx.quantity;
        const costBasis = tx.purchasePrice * tx.quantity;

        acc.totalValue += currentValue;
        acc.totalPL += (currentValue - costBasis);
        return acc;
    }, { totalValue: 0, totalPL: 0 });

    const customSelectStyles = {
        control: (base) => ({
            ...base,
            background: "#0D0D0D",
            borderColor: "#404040",
            color: "#e1e1e6",
            borderRadius: "0.75rem",
            minHeight: 45,
            paddingLeft: 4,
            boxShadow: 'none',
            ':hover': { borderColor: '#86efac' }
        }),
        menu: (base) => ({ ...base, background: "#0D0D0D", border: "1px solid #404040", borderRadius: "0.75rem" }),
        option: (base, state) => ({
            ...base,
            background: state.isFocused ? "#1a1a1a" : "#0D0D0D",
            color: "#e1e1e6",
            cursor: 'pointer'
        }),
        singleValue: (base) => ({ ...base, color: "#e1e1e6" }),
        input: (base) => ({ ...base, color: '#e1e1e6' })
    };

    const formatOptionLabel = (option) => (
        <div className="flex items-center gap-3">
            <img src={option.image} alt={option.label} className="w-6 h-6 rounded-full" />
            <span className="text-white">{option.label}</span>
        </div>
    );

    if (authLoading || coinsLoading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (!authenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="bg-card p-8 rounded-2xl border border-border max-w-md w-full">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                        <PieChart className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Track Your Crypto Portfolio</h2>
                    <p className="text-secondary mb-8">
                        Log in to add coins and track your portfolio performance in real-time.
                    </p>
                    <button
                        onClick={() => router.push('/login')}
                        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Log In or Sign Up
                    </button>
                </div>
            </div>
        );
    }

    const chartRanges = [
        { label: "30s", value: "30s" },
        { label: "1m", value: "1m" },
        { label: "10m", value: "10m" },
        { label: "1M", value: "1M" },
        { label: "3M", value: "3M" },
        { label: "1Y", value: "1Y" }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Portfolio Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                            <Wallet className="w-5 h-5" />
                        </div>
                        <h2 className="text-secondary font-medium">Total Balance</h2>
                    </div>
                    <div className="flex items-baseline gap-4">
                        <h1 className="text-4xl font-bold text-white">
                            ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </h1>
                        <div className={cn("flex items-center gap-1 font-semibold px-2 py-1 rounded-full text-sm", totalPL >= 0 ? "text-accent bg-accent/10" : "text-red-400 bg-red-400/10")}>
                            {totalPL >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                            ${Math.abs(totalPL).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                >
                    <Plus className="w-5 h-5" />
                    Add Transaction
                </button>
            </div>

            {/* Chart Section */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-bold text-white">Live Performance</h3>
                    <div className="flex bg-white/5 p-1 rounded-xl">
                        {chartRanges.map(r => (
                            <button
                                key={r.value}
                                onClick={() => setLiveWindow(r.value)}
                                className={cn(
                                    "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                                    liveWindow === r.value
                                        ? "bg-accent text-black shadow-sm"
                                        : "text-secondary hover:text-white"
                                )}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    {chartData.length > 1 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#232323" vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    stroke="#525252"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    interval="preserveStartEnd"
                                    minTickGap={30}
                                />
                                <YAxis
                                    stroke="#525252"
                                    fontSize={12}
                                    tickFormatter={v => `$${formatCompactNumber(v)}`}
                                    tickLine={false}
                                    axisLine={false}
                                    domain={['auto', 'auto']}
                                />
                                <Tooltip
                                    contentStyle={{ background: '#0D0D0D', border: '1px solid #333', borderRadius: '12px', color: '#fff' }}
                                    itemStyle={{ color: '#86efac' }}
                                    formatter={v => [`$${v.toLocaleString()}`, "Value"]}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#86efac"
                                    strokeWidth={3}
                                    dot={false}
                                    isAnimationActive={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex items-center justify-center text-secondary text-sm">
                            Waiting for more data points...
                        </div>
                    )}
                </div>
            </div>

            {/* Portfolio Table */}
            {portfolio.length === 0 ? (
                <div className="text-center py-20 bg-card rounded-2xl border border-border/50 border-dashed">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                        <Plus className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Empty Portfolio</h3>
                    <p className="text-secondary mb-6">Start adding your assets to track performance</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-accent hover:underline font-medium"
                    >
                        Add your first asset
                    </button>
                </div>
            ) : (
                <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-secondary text-xs uppercase font-medium">
                                <tr>
                                    <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => setSortBy('coin')}>Asset</th>
                                    <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('value')}>Price</th>
                                    <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('qty')}>Holdings</th>
                                    <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('value')}>Total Value</th>
                                    <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('profit')}>Profit/Loss</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {sortedPortfolio.map((item, idx) => {
                                    const coin = getCoinParams(item.coinId);
                                    const currentPrice = coin ? coin.current_price : item.purchasePrice;
                                    const currentValue = currentPrice * item.quantity;
                                    const profitOrLoss = currentValue - (item.purchasePrice * item.quantity);
                                    const isProfit = profitOrLoss >= 0;

                                    return (
                                        <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {coin && <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />}
                                                    <div>
                                                        <div className="font-bold text-white">{coin ? coin.name : 'Unknown Coin'}</div>
                                                        <div className="text-xs text-secondary">{coin ? coin.symbol.toUpperCase() : '???'}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-white">
                                                ${currentPrice.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="text-white font-medium">{item.quantity} {coin ? coin.symbol.toUpperCase() : ''}</div>
                                                <div className="text-xs text-secondary">Buy: ${item.purchasePrice.toLocaleString()}</div>
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-white">
                                                ${currentValue.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={cn("inline-block px-2.5 py-1 rounded-lg text-sm font-medium", isProfit ? "text-accent bg-accent/10" : "text-red-400 bg-red-400/10")}>
                                                    {isProfit ? "+" : "-"}${Math.abs(profitOrLoss).toLocaleString()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => handleEdit(idx)} className="p-2 text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => handleDelete(idx)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Tailwind Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-card w-full max-w-md rounded-2xl border border-border shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-border/50 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">{editIdx !== null ? 'Edit Transaction' : 'Add Transaction'}</h2>
                            <button onClick={resetForm} className="text-secondary hover:text-white">
                                <Plus className="w-6 h-6 rotate-45" />
                            </button>
                        </div>

                        <form onSubmit={handleAddTransaction} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-2">Select Asset</label>
                                <Select
                                    options={coinOptions}
                                    value={selectedCoinOption}
                                    onChange={(option) => setSelectedCoinId(option ? option.value : null)}
                                    isLoading={coinsLoading}
                                    formatOptionLabel={formatOptionLabel}
                                    placeholder="Search coin..."
                                    styles={customSelectStyles}
                                    className="text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-2">Quantity</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={e => setQuantity(e.target.value)}
                                            className="w-full bg-black border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-2">Price per Coin</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">$</span>
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={e => setPrice(e.target.value)}
                                            className="w-full bg-black border border-border rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-secondary mb-2">Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary z-10" />
                                    <DatePicker
                                        selected={date ? new Date(date) : new Date()}
                                        onChange={(date) => setDate(date.toISOString().slice(0, 10))}
                                        className="w-full bg-black border border-border rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent transition-colors block"
                                        dateFormat="yyyy-MM-dd"
                                        wrapperClassName="w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-secondary mb-2">Notes</label>
                                <div className="relative">
                                    <Text className="absolute left-4 top-3 w-4 h-4 text-secondary" />
                                    <textarea
                                        value={notes}
                                        onChange={e => setNotes(e.target.value)}
                                        placeholder="Optional notes..."
                                        rows={2}
                                        className="w-full bg-black border border-border rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <div className="flex items-center justify-between text-sm mb-4 bg-white/5 p-3 rounded-lg">
                                    <span className="text-secondary">Total Cost</span>
                                    <span className="text-white font-bold">${quantity && price ? (parseFloat(quantity) * parseFloat(price)).toLocaleString() : '0.00'}</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!selectedCoinId || !quantity || !price}
                                    className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    {editIdx !== null ? 'Save Changes' : 'Add Transaction'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
