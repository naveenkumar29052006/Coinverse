import { Inter } from 'next/font/google'
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import { CoinProvider } from '@/context/CoinContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Coinverse',
    description: 'Pro Crypto Tracker',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <CoinProvider>
                        {children}
                    </CoinProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
