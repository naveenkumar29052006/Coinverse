import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-background text-white font-sans selection:bg-accent/30 selection:text-accent">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col min-w-0">
                <Header />
                <div className="flex-1 p-8 overflow-y-auto overflow-x-hidden no-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
