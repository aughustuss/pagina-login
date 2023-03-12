const checkRole = (role) =>{
    return(req,res,next) =>{
        const user = req.user;
    

    if(user.role == role) {
        return next();
    }
    return res.status(403).json({message  : 'Access denied'});
};  
}


module.exports = checkRole;
