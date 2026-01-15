"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, TrendingUp, TrendingDown, Star } from 'lucide-react';
import { cn, formatCompactNumber } from '@/lib/utils';
import { useCoins } from '@/context/CoinContext';
import Sparkline from '@/components/Coins/Sparkline';

const CoinsPage = () => {
    const { coins, loading } = useCoins();
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const [sortBy, setSortBy] = useState('market_cap_desc');

    const filteredCoins = coins.filter(coin =>
    (coin.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const sortedCoins = [...filteredCoins].sort((a, b) => {
        switch (sortBy) {
            case 'price_asc': return a.current_price - b.current_price;
            case 'price_desc': return b.current_price - a.current_price;
            case 'name_asc': return a.name.localeCompare(b.name);
            case 'name_desc': return b.name.localeCompare(a.name);
            case 'market_cap_asc': return a.market_cap - b.market_cap;
            case 'market_cap_desc': default: return b.market_cap - a.market_cap;
        }
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Cryptocurreny Prices</h1>
                    <p className="text-secondary text-sm">Top coins by market cap</p>
                </div>
                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                    <input
                        type="text"
                        placeholder="Search coins..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-64 bg-card border border-border rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-accent"
                    />
                </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-secondary text-xs uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">#</th>
                                <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => setSortBy(prev => prev === 'name_asc' ? 'name_desc' : 'name_asc')}>Name</th>
                                <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy(prev => prev === 'price_asc' ? 'price_desc' : 'price_asc')}>Price</th>
                                <th className="px-6 py-4 text-right">24h Change</th>
                                <th className="px-6 py-4 text-right cursor-pointer hover:text-white" onClick={() => setSortBy(prev => prev === 'market_cap_asc' ? 'market_cap_desc' : 'market_cap_desc')}>Market Cap</th>
                                <th className="px-6 py-4 text-right hidden md:table-cell">Volume (24h)</th>
                                <th className="px-6 py-4 text-right">Last 7 Days</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {sortedCoins.map((coin, index) => (
                                <tr
                                    key={coin.id}
                                    onClick={() => router.push(`/coin/${coin.id}`)}
                                    className="hover:bg-white/5 transition-colors cursor-pointer group"
                                >
                                    <td className="px-6 py-4 text-secondary text-sm">{coin.market_cap_rank}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                                            <div>
                                                <div className="font-bold text-white group-hover:text-accent transition-colors">{coin.name}</div>
                                                <div className="text-xs text-secondary uppercase">{coin.symbol}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-white">
                                        ${coin.current_price.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={cn(
                                            "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold",
                                            coin.price_change_percentage_24h > 0
                                                ? "text-accent bg-accent/10"
                                                : "text-red-400 bg-red-400/10"
                                        )}>
                                            {coin.price_change_percentage_24h > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-white">
                                        ${formatCompactNumber(coin.market_cap)}
                                    </td>
                                    <td className="px-6 py-4 text-right text-secondary hidden md:table-cell">
                                        ${formatCompactNumber(coin.total_volume)}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-4">
                                            <Sparkline data={coin.sparkline_in_7d} isPositive={coin.price_change_percentage_7d_in_currency >= 0} />
                                            <span className={cn("text-sm font-bold min-w-[60px] text-right", coin.price_change_percentage_7d_in_currency >= 0 ? "text-accent" : "text-red-400")}>
                                                {coin.price_change_percentage_7d_in_currency ? `${coin.price_change_percentage_7d_in_currency.toFixed(2)}%` : '---'}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CoinsPage;
