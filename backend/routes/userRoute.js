const express = require('express');
const {registerUser,loginUser,confirmEmail} = require('../controllers/userController');

const router = express.Router(); 

//register route
router.post('/register',registerUser);

//login route
router.post('/login',loginUser);

//confirm email
router.post('/confirm-email',confirmEmail);

module.exports = router