import express from 'express';
import { UserLogin, UserLogout, UserRegister } from '../controllers/User-controller.js';

const router = express.Router();

router.post('/signup', UserRegister);
router.post('/login',UserLogin)
router.get('/logout',UserLogout)

export default router;
