import { Router } from 'express';
import productRoute from '@/routes/product.route';
import orderRoute from '@/routes/order.route';
import payzeTransactionRoute from '@/routes/payze-transaction.route';

const router = Router();

router.use('/products', productRoute);
router.use('/orders', orderRoute);
router.use('/transactions', payzeTransactionRoute);

export default router;