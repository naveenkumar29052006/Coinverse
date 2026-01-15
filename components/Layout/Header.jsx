"use client";
import React, { useState } from 'react';
import { Search, Bell, User, X, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

import { useCoins } from '../../context/CoinContext';

export function Header({ title = "Dashboard" }) {
    const { user, logout, authenticated } = useAuth();
    const { coins } = useCoins();
    const router = useRouter();

    // Search state
    const [query, setQuery] = useState('');
    const filteredCoins = query.length > 0
        ? coins.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.symbol.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
        : [];

    const handleSearchSelect = (id) => {
        router.push(`/coin/${id}`);
        setQuery('');
    };

    // Mock portfolio state for notification logic
    // In a real app, this would come from a Portfolio context
    const hasPortfolioAssets = false; // Mocked as false based on user request "if no asset added"

    const [showNotifications, setShowNotifications] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
            <h2 className="text-2xl font-bold text-white">{title}</h2>

            <div className="flex items-center gap-6">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-accent transition-colors" />
                    <input
                        type="text"
                        placeholder="Search assets..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent/50 w-64 transition-all"
                    />

                    {/* Search Results Dropdown */}
                    {query.length > 0 && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-card border border-border rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
                            {filteredCoins.length > 0 ? (
                                filteredCoins.map(coin => (
                                    <div
                                        key={coin.id}
                                        onClick={() => handleSearchSelect(coin.id)}
                                        className="flex items-center gap-3 p-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-border/50 last:border-0"
                                    >
                                        <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-white">{coin.name}</span>
                                            <span className="text-xs text-secondary">{coin.symbol.toUpperCase()}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-sm text-secondary">
                                    No assets found
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2 text-secondary hover:text-white hover:bg-card rounded-full transition-all"
                    >
                        <Bell className="w-5 h-5" />
                        {!hasPortfolioAssets && <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse" />}
                    </button>

                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-xl shadow-xl z-50 p-4 animate-in fade-in slide-in-from-top-2">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-white">Notifications</h3>
                                <button onClick={() => setShowNotifications(false)}><X className="w-4 h-4 text-secondary hover:text-white" /></button>
                            </div>
                            {!hasPortfolioAssets ? (
                                <div className="text-center py-6 text-sm text-secondary">
                                    <p>Please add something to your portfolio to get notifications!</p>
                                </div>
                            ) : (
                                <div className="text-center py-6 text-sm text-secondary">
                                    <p>No new notifications</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="relative">
                    {authenticated ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-blue-500 p-[2px] hover:scale-105 transition-transform"
                            >
                                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                                    <span className="font-bold text-white text-xs">
                                        {user?.name ? user.name.substring(0, 2).toUpperCase() : 'US'}
                                    </span>
                                </div>
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-xl z-50 p-2 animate-in fade-in zoom-in-95 origin-top-right">
                                    <div className="px-3 py-2 border-b border-border/50 mb-2">
                                        <p className="text-sm font-bold text-white">{user?.name}</p>
                                        <p className="text-xs text-secondary truncate">{user?.email}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => router.push('/login')}
                            className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
