import express from "express"
import BarberController from "../controllers/barberController.js";

const router = express.Router(); 


router
    .post('/barber/register',BarberController.registerUser)
    .post('/barber/login',BarberController.loginUser)
    .get('/barber/profile/:id',BarberController.getProfile)
    .post('/barber/confirm-email',BarberController.confirmEmail)



export default router;