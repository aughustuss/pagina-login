const express = require('express');
const userController = require('../controllers/user_controller');


const router = express.Router()


//register route
router.post('/register',userController.register);

//login route
router.post('/register',userController.login);


module.exports = router;