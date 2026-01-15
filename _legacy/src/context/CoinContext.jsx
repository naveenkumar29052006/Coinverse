import React, { createContext, useState, useContext, useEffect } from 'react';

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const [globalStats, setGlobalStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [coinsRes, globalRes] = await Promise.all([
                    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d'),
                    fetch('https://api.coingecko.com/api/v3/global')
                ]);

                const coinsData = await coinsRes.json();
                const globalData = await globalRes.json();

                setCoins(coinsData);
                setGlobalStats(globalData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // WebSocket for Real-Time Updates
    useEffect(() => {
        if (loading || coins.length === 0) return;

        const ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const priceMap = {};

            data.forEach(ticker => {
                if (ticker.s.endsWith('USDT')) {
                    const symbol = ticker.s.slice(0, -4).toLowerCase();
                    priceMap[symbol] = parseFloat(ticker.c);
                }
            });

            setCoins(prevCoins => prevCoins.map(coin => {
                const newPrice = priceMap[coin.symbol.toLowerCase()];
                if (newPrice) {
                    // Calculate quick 24h change mock if needed or just update price
                    const priceChange = ((newPrice - coin.current_price) / coin.current_price) * 100;
                    return {
                        ...coin,
                        current_price: newPrice,
                        // Optionally update 24h change slightly to reflect movement, 
                        // but better to keep API 24h data as base to avoid massive jumps from different sources
                    };
                }
                return coin;
            }));
        };

        return () => {
            if (ws) ws.close();
        };
    }, [loading]);

    return (
        <CoinContext.Provider value={{ coins, globalStats, loading }}>
            {children}
        </CoinContext.Provider>
    );
};

export const useCoins = () => {
    const context = useContext(CoinContext);
    if (!context) {
        throw new Error('useCoins must be used within a CoinProvider');
    }
    return context;
};