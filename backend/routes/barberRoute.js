const express = require('express');
const {registerUser,loginUser} = require('../controllers/barberController');

const router = express.Router(); 

//register route
router.post('/register',registerUser);

//login route
router.post('/login',loginUser);


module.exports = router