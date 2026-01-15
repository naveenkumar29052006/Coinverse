"use client";
import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar, Newspaper } from 'lucide-react';

const NEWS_URL = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(NEWS_URL);
                if (!res.ok) throw new Error('Failed to fetch news.');
                const data = await res.json();
                setNews(data.Data || []);
            } catch (e) {
                setError('Could not load news. Please try again later.');
            }
            setLoading(false);
        }
        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-[50vh] text-red-500 font-medium">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Newspaper className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white">Crypto News</h1>
                    <p className="text-secondary text-sm">Latest updates from the crypto world</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, idx) => (
                    <article
                        key={idx}
                        className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 flex flex-col"
                    >
                        {item.imageurl && (
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.imageurl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                            </div>
                        )}

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                                <span className="bg-white/5 px-2 py-1 rounded-full text-white font-medium">
                                    {item.source_info.name}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(item.published_on * 1000).toLocaleDateString()}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-secondary text-sm line-clamp-3 mb-6 flex-1">
                                {item.body}
                            </p>

                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-4 py-3 bg-white/5 rounded-xl text-white font-medium group-hover:bg-accent group-hover:text-black transition-all"
                            >
                                Read Article
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
