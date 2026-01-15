import React from "react";
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Activity, DollarSign, Zap, BarChart3, AlertCircle } from 'lucide-react';
import { cn, formatCompactNumber } from '../../lib/utils';
import { useCoins } from '../../context/CoinContext';
import { motion } from 'framer-motion';

// Custom Card Components
const MarketCapCard = ({ globalData }) => {
    const isPositive = globalData?.market_cap_change_percentage_24h_usd > 0;
    return (
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity className="w-24 h-24 text-accent" />
            </div>
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-secondary text-sm font-medium">Market Cap</h3>
                <Activity className="w-4 h-4 text-secondary" />
            </div>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-1">
                    ${formatCompactNumber(globalData?.total_market_cap?.usd || 0)}
                </h2>
                <div className={cn("inline-flex items-center gap-1 text-sm font-medium", isPositive ? "text-accent" : "text-red-400")}>
                    {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {globalData?.market_cap_change_percentage_24h_usd?.toFixed(2)}%
                </div>
            </div>
            {/* Simple Sparkline Visualization */}
            <div className="mt-4 h-10 w-full flex items-end gap-1 opacity-50">
                {[40, 60, 45, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className={cn("flex-1 rounded-t-sm", isPositive ? "bg-accent" : "bg-red-400")}
                    />
                ))}
            </div>
        </div>
    );
};

const FearAndGreedCard = () => {
    // Mock value for Fear & Greed
    const value = 49;
    const status = "Neutral";

    // Calculate rotation: 0 = -90deg (left), 50 = 0deg (top), 100 = 90deg (right)
    // Actually for a semi-circle gauge: 
    // 0 -> 180 degrees range.
    // Let's map 0-100 to -90deg to 90deg.
    const rotation = (value / 100) * 180 - 90;

    return (
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-secondary text-sm font-medium">Fear & Greed</h3>
                <AlertCircle className="w-4 h-4 text-secondary" />
            </div>

            <div className="flex flex-col items-center justify-center relative h-48">
                {/* Speedometer Gauge */}
                <div className="relative w-64 h-32 overflow-hidden">
                    {/* Gauge Background Segments */}


                    {/* Colored Segments (using conical gradient or multiple borders is hard in CSS specifically for segments)
                        Let's use a simpler approach with SVG for perfect segments
                    */}
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                        {/* Red - Fear (180deg to 138deg) */}
                        <path d="M 10 50 A 40 40 0 0 1 20.28 23.23" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
                        {/* Orange (132deg to 93deg) */}
                        <path d="M 23.24 20.28 A 40 40 0 0 1 47.9 10.08" fill="none" stroke="#f97316" strokeWidth="12" strokeLinecap="round" />
                        {/* Yellow (87deg to 48deg) */}
                        <path d="M 52.09 10.05 A 40 40 0 0 1 76.77 20.28" fill="none" stroke="#eab308" strokeWidth="12" strokeLinecap="round" />
                        {/* Green - Greed (42deg to 0deg) */}
                        <path d="M 79.72 23.23 A 40 40 0 0 1 90 50" fill="none" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" />
                    </svg>

                    {/* Needle */}
                    <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: rotation }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="absolute bottom-0 left-1/2 w-1.5 h-full origin-bottom z-10"
                        style={{ marginLeft: '-3px', height: '100%' }}
                    >
                        <div className="w-1.5 h-[calc(100%-15px)] bg-white rounded-t-full mx-auto mt-[15px] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </motion.div>
                </div>

                {/* Center Hub */}
                <div className="w-5 h-5 bg-white rounded-full mt-[-10px] z-20 relative shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

                <div className="mt-4 text-center">
                    <div className="text-4xl font-bold text-white tabular-nums">{value}</div>
                    <div className="text-secondary text-base font-medium">{status}</div>
                </div>
            </div>
        </div>
    );
};

const AltcoinSeasonCard = () => {
    // Mock data
    const value = 26;
    return (
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-secondary text-sm font-medium">Altcoin Season</h3>
                <Zap className="w-4 h-4 text-secondary" />
            </div>
            <div className="space-y-4">
                <div>
                    <span className="text-3xl font-bold text-white">{value}</span>
                    <span className="text-secondary text-lg">/100</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-blue-500 h-2 rounded-full"
                    />
                </div>
                <div className="flex justify-between text-xs text-secondary font-medium">
                    <span>Bitcoin Season</span>
                    <span>Altcoin Season</span>
                </div>
            </div>
        </div>
    );
}

const RSICard = () => {
    // Mock data
    const value = 65.65;
    const status = "Overbought";
    return (
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-secondary text-sm font-medium">Average Crypto RSI</h3>
                <BarChart3 className="w-4 h-4 text-secondary" />
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-white">{value}</span>
                    <span className="bg-red-500/20 text-red-500 px-2 py-0.5 rounded text-xs font-bold uppercase">{status}</span>
                </div>
                {/* Range Visualization */}
                <div className="w-full bg-gradient-to-r from-green-500 via-gray-500 to-red-500 h-2 rounded-full relative">
                    <motion.div
                        initial={{ left: 0 }}
                        animate={{ left: `${value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-black"
                    />
                </div>
                <div className="flex justify-between text-xs text-secondary font-medium">
                    <span>Oversold</span>
                    <span>Overbought</span>
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    const { coins, globalStats, loading } = useCoins();

    // Get Top 5 Gainers and Losers
    const topGainers = [...coins].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5);
    const topLosers = [...coins].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5);
    const navigate = useNavigate();

    const handleCoinClick = (id) => {
        navigate(`/coin/${id}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header Metric Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <MarketCapCard globalData={globalStats} />
                <FearAndGreedCard />
                <AltcoinSeasonCard />
                <RSICard />
            </section>

            {/* Top Movers Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Gainers */}
                <div className="bg-card rounded-2xl border border-border/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        Top 5 Gainers (Last 24h)
                    </h3>
                    <div className="space-y-4">
                        {topGainers.map(coin => (
                            <div key={coin.id} onClick={() => handleCoinClick(coin.id)} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <span className="text-secondary text-sm font-medium w-4">{coin.market_cap_rank}</span>
                                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <div className="font-bold text-white group-hover:text-accent transition-colors">{coin.name}</div>
                                        <div className="text-xs text-secondary">{coin.symbol.toUpperCase()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-white">${coin.current_price.toLocaleString()}</div>
                                    <div className="text-accent text-sm font-medium flex items-center justify-end gap-1">
                                        <TrendingUp className="w-3 h-3" />
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Losers */}
                <div className="bg-card rounded-2xl border border-border/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-400" />
                        Top 5 Losers (Last 24h)
                    </h3>
                    <div className="space-y-4">
                        {topLosers.map(coin => (
                            <div key={coin.id} onClick={() => handleCoinClick(coin.id)} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <span className="text-secondary text-sm font-medium w-4">{coin.market_cap_rank}</span>
                                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <div className="font-bold text-white group-hover:text-red-400 transition-colors">{coin.name}</div>
                                        <div className="text-xs text-secondary">{coin.symbol.toUpperCase()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-white">${coin.current_price.toLocaleString()}</div>
                                    <div className="text-red-400 text-sm font-medium flex items-center justify-end gap-1">
                                        <TrendingDown className="w-3 h-3" />
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ticker List Link */}
            <div className="flex items-center justify-between mt-8 p-6 bg-card rounded-2xl border border-border/50">
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Market Overview</h2>
                    <p className="text-secondary text-sm">View global market trends and top performers.</p>
                </div>
                <a href="/coins" className="flex items-center gap-2 text-accent hover:text-white px-6 py-3 bg-accent/10 hover:bg-accent/20 rounded-xl transition-all font-medium">
                    View All Coins <TrendingUp className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default Home;
