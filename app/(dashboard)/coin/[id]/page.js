"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Area, AreaChart
} from 'recharts';
import { ArrowLeft, Globe, MessageSquare, Twitter, TrendingUp, TrendingDown, DollarSign, Activity, Database, Layers } from 'lucide-react';
import { cn, formatCompactNumber } from '@/lib/utils';

const CoinDetail = () => {
    const params = useParams();
    const id = params?.id;
    const router = useRouter();
    const [coin, setCoin] = useState(null);
    const [chartData, setChartData] = useState([]);
    const [timeframe, setTimeframe] = useState('7d');
    const [loading, setLoading] = useState(true);
    const [cryptoAmount, setCryptoAmount] = useState('1');
    const [usdAmount, setUsdAmount] = useState('');

    // Fetch Coin Details (only once on mount or id change)
    useEffect(() => {
        if (!id) return;
        const fetchCoinDetails = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=true`);
                const data = await response.json();
                setCoin(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coin details:', error);
                setLoading(false);
            }
        };

        fetchCoinDetails();
    }, [id]);

    // Fetch Chart Data (depends on id and timeframe)
    useEffect(() => {
        if (!id) return;
        const fetchChartData = async () => {
            try {
                const days = timeframe === '24h' ? 1 : timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 365;
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
                const data = await response.json();

                if (data.prices) {
                    const formattedData = data.prices.map(price => ({
                        date: new Date(price[0]).toLocaleString(),
                        timestamp: price[0],
                        price: price[1]
                    }));
                    setChartData(formattedData);
                }
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchChartData();
    }, [id, timeframe]);

    const handleCryptoChange = (value) => {
        setCryptoAmount(value);
        if (value && !isNaN(value) && coin) {
            setUsdAmount((parseFloat(value) * coin.market_data.current_price.usd).toFixed(2));
        } else {
            setUsdAmount('');
        }
    };

    const handleUsdChange = (value) => {
        setUsdAmount(value);
        if (value && !isNaN(value) && coin) {
            setCryptoAmount((parseFloat(value) / coin.market_data.current_price.usd).toFixed(8));
        } else {
            setCryptoAmount('');
        }
    };

    const isPositiveChange = coin?.market_data?.price_change_percentage_24h > 0;
    const lineColor = isPositiveChange ? "#86efac" : "#fb7185"; // Green or Red
    const gradientColor = isPositiveChange ? "#86efac" : "#fb7185";

    if (loading || !coin) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-secondary hover:text-white transition-colors group mb-4"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                    <img src={coin.image.large} alt={coin.name} className="w-16 h-16 rounded-full shadow-lg shadow-black/50" />
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-1">{coin.name} <span className="text-secondary text-2xl font-normal">({coin.symbol.toUpperCase()})</span></h1>
                        <span className="bg-white/5 text-secondary px-2 py-0.5 rounded text-xs font-medium">Rank #{coin.market_cap_rank}</span>
                    </div>
                </div>
                <div className="text-right">
                    <h2 className="text-4xl font-bold text-white mb-2">${coin.market_data.current_price.usd.toLocaleString()}</h2>
                    <div className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold", isPositiveChange ? "text-accent bg-accent/10" : "text-red-400 bg-red-400/10")}>
                        {isPositiveChange ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {coin.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-card rounded-2xl p-6 border border-border/50">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Activity className="w-5 h-5 text-accent" />
                                Price Performance
                            </h3>
                            <div className="flex bg-white/5 p-1 rounded-xl">
                                {['24h', '7d', '30d', '1y'].map(time => (
                                    <button
                                        key={time}
                                        className={cn(
                                            "px-4 py-1.5 rounded-lg text-sm font-medium transition-all uppercase",
                                            timeframe === time
                                                ? "bg-white text-black shadow-sm"
                                                : "text-secondary hover:text-white"
                                        )}
                                        onClick={() => setTimeframe(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={gradientColor} stopOpacity={0.3} />
                                            <stop offset="95%" stopColor={gradientColor} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#232323" vertical={false} />
                                    <XAxis
                                        dataKey="timestamp"
                                        tickFormatter={(unix) => {
                                            const date = new Date(unix);
                                            return timeframe === '24h'
                                                ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                                : date.toLocaleDateString([], { month: 'short', day: 'numeric' });
                                        }}
                                        stroke="#525252"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        minTickGap={30}
                                    />
                                    <YAxis
                                        domain={['auto', 'auto']}
                                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                                        stroke="#525252"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        width={60}
                                    />
                                    <Tooltip
                                        contentStyle={{ background: '#0D0D0D', border: '1px solid #333', borderRadius: '12px', color: '#fff' }}
                                        itemStyle={{ color: lineColor }}
                                        labelStyle={{ color: '#999', marginBottom: '0.5rem' }}
                                        formatter={(value) => [`$${value.toLocaleString()}`, "Price"]}
                                        labelFormatter={(label) => label}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="price"
                                        stroke={lineColor}
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorPrice)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-card rounded-2xl p-6 border border-border/50">
                        <h3 className="text-lg font-bold text-white mb-4">About {coin.name}</h3>
                        <div
                            className="prose prose-invert prose-sm max-w-none text-secondary"
                            dangerouslySetInnerHTML={{ __html: coin.description.en || "No description available." }}
                        />

                        <div className="mt-8 pt-6 border-t border-border/50">
                            <h4 className="text-white font-semibold mb-4">Official Links</h4>
                            <div className="flex flex-wrap gap-3">
                                {coin.links?.homepage?.[0] && (
                                    <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
                                        <Globe className="w-4 h-4" /> Website
                                    </a>
                                )}
                                {coin.links?.twitter_screen_name && (
                                    <a href={`https://twitter.com/${coin.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
                                        <Twitter className="w-4 h-4" /> Twitter
                                    </a>
                                )}
                                {coin.links?.subreddit_url && (
                                    <a href={coin.links.subreddit_url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
                                        <MessageSquare className="w-4 h-4" /> Reddit
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Stats & Converter */}
                <div className="space-y-6">
                    <div className="bg-card rounded-2xl p-6 border border-border/50">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-accent" />
                            Converter
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-black border border-border rounded-xl p-3">
                                <label className="text-xs text-secondary font-medium block mb-1">{coin.symbol.toUpperCase()}</label>
                                <input
                                    type="number"
                                    value={cryptoAmount}
                                    onChange={(e) => handleCryptoChange(e.target.value)}
                                    className="w-full bg-transparent text-white font-bold text-lg focus:outline-none"
                                    placeholder="0"
                                />
                            </div>
                            <div className="flex justify-center text-secondary">
                                <TrendingDown className="w-4 h-4" />
                            </div>
                            <div className="bg-black border border-border rounded-xl p-3">
                                <label className="text-xs text-secondary font-medium block mb-1">USD</label>
                                <input
                                    type="number"
                                    value={usdAmount || (parseFloat(cryptoAmount) * coin.market_data.current_price.usd).toFixed(2)}
                                    onChange={(e) => handleUsdChange(e.target.value)}
                                    className="w-full bg-transparent text-white font-bold text-lg focus:outline-none"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="text-xs text-center text-secondary pt-2">
                                1 {coin.symbol.toUpperCase()} = ${coin.market_data.current_price.usd.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-2xl p-6 border border-border/50">
                        <h3 className="text-lg font-bold text-white mb-6">Market Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-border/30">
                                <span className="text-secondary text-sm flex items-center gap-2"><Activity className="w-4 h-4" /> Market Cap</span>
                                <span className="font-semibold">${formatCompactNumber(coin.market_data.market_cap.usd)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-border/30">
                                <span className="text-secondary text-sm flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 24h Volume</span>
                                <span className="font-semibold">${formatCompactNumber(coin.market_data.total_volume.usd)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-border/30">
                                <span className="text-secondary text-sm flex items-center gap-2"><Database className="w-4 h-4" /> Circulating Supply</span>
                                <span className="font-semibold">{formatCompactNumber(coin.market_data.circulating_supply)} {coin.symbol.toUpperCase()}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-border/30">
                                <span className="text-secondary text-sm flex items-center gap-2"><Layers className="w-4 h-4" /> Total Supply</span>
                                <span className="font-semibold">{coin.market_data.total_supply ? formatCompactNumber(coin.market_data.total_supply) : '∞'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetail;
