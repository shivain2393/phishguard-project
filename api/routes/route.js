import express from 'express';
import { predictUrl } from '../controllers/controller.js'

const router = express.Router();

router.post('/predict-url', predictUrl);


export default router;