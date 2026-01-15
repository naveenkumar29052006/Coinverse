import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PieChart, Newspaper, Info, LogOut, LogIn, DollarSign } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';

export function Sidebar() {
    const location = useLocation();
    const { authenticated, user, logout } = useAuth();

    const navLinks = [
        { to: '/', label: 'Overview', icon: LayoutDashboard },
        { to: '/coins', label: 'Coins', icon: DollarSign },
        { to: '/portfolio', label: 'Portfolio', icon: PieChart },
        { to: '/news', label: 'News', icon: Newspaper },
        { to: '/about', label: 'About Us', icon: Info },
    ];

    return (
        <div className="flex flex-col fixed left-0 top-0 w-64 h-screen bg-card border-r border-border">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    FINBRO
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.to;

                    return (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-white text-black font-medium shadow-lg shadow-white/10"
                                    : "text-secondary hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-black" : "group-hover:text-white")} />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border">
                {authenticated ? (
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-secondary hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="flex items-center gap-3 px-4 py-3 w-full text-accent hover:bg-accent/10 rounded-xl transition-all"
                    >
                        <LogIn className="w-5 h-5" />
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}
