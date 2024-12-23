import {Router} from "express";
import PayzeTransactionController from "@/controllers/payze-transaction.controller";

const router = Router();
const payzeTransactionController = new PayzeTransactionController();

router.post('/payze/hook', payzeTransactionController.hook);

export default router;