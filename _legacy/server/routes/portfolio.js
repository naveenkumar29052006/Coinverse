import express from 'express';
import prisma from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get User's Portfolio
router.get('/', authenticateToken, async (req, res) => {
    try {
        const portfolio = await prisma.portfolio.findMany({
            where: { userId: req.user.id }
        });
        res.json(portfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add Transaction
router.post('/add', authenticateToken, async (req, res) => {
    try {
        const { coinId, quantity, purchasePrice, date, notes } = req.body;

        if (!coinId || !quantity || !purchasePrice) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const transaction = await prisma.portfolio.create({
            data: {
                userId: req.user.id,
                coinId,
                quantity: parseFloat(quantity),
                purchasePrice: parseFloat(purchasePrice),
                date: date || new Date().toISOString(),
                notes
            }
        });

        res.status(201).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
