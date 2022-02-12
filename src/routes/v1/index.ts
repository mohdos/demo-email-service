import express from 'express';
import { emailRouter } from './email.route';

const router = express.Router();

router.use('/emails', emailRouter);

export {router as v1Router};
