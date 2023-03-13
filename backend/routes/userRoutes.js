import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router(); 


router
    .post('/register',UserController.registerUser)
    .post('/login',UserController.loginUser)
    .get('/profile/:id',UserController.getProfile)
    .post('/confirm-email',UserController.confirmEmail)


export default router;