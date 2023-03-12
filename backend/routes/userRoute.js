const express = require('express');
const {registerUser,loginUser,getProfile,confirmEmail} = require('../controllers/userController');

const router = express.Router(); 

//register route
router.post('/register',registerUser);

//login route
router.post('/login',loginUser);

//profile route
router.get('/profile/:id',getProfile);

//confirm email
router.post('/confirm-email',confirmEmail);

module.exports = router