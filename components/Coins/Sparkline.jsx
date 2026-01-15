import React from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';
import { cn } from '@/lib/utils';

const Sparkline = ({ data, isPositive }) => {
    // Flatten data if it's not in the expected format or just take the price array
    const chartData = data?.price ? data.price.map((val, i) => ({ i, val })) : [];
    const color = isPositive ? "#86efac" : "#f87171"; // Accent Green or Red 400

    if (!chartData.length) return <div className="h-8 w-24 bg-white/5 rounded animate-pulse" />;

    return (
        <div className="h-12 w-32">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id={`gradient-${isPositive}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <YAxis domain={['min', 'max']} hide />
                    <Area
                        type="monotone"
                        dataKey="val"
                        stroke={color}
                        strokeWidth={2}
                        fill={`url(#gradient-${isPositive})`}
                        isAnimationActive={false} // Disable animation for performance in list
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default React.memo(Sparkline);
