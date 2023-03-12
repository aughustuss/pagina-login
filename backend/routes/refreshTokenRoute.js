const express = require('express');
const renewRefreshToken = require('../utils/token');

const router = express.Router();


//route for update token
router.post('/refresh-token',async(req,res)=>{
    const {refreshToken } = req.body;

    try{
        //renew access token
        const accessToken = await renewRefreshToken(refreshToken);

        //send new tokens
        res.json({accessToken});

    }catch(err){
        console.error(err);
        res.status(400).json({error:err.message});
    }
})


module.exports = router;
