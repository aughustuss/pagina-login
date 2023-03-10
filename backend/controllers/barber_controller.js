const barberService = require('../service/barber');

class userController {

    //register
    static async register(req,res){
        try{
            const{} = req.body;
            const user = await userService.registerUser();
            return res.status(201).json(user);

        }catch(err){
            return res.status(400).json({message:err.message})
        }
    }

    //login
    async login(req, res) {
        try {
          const { email, password } = req.body;
          const { accessToken, refreshToken } = await barberService.login(email, password);
          return res.status(200).json({ accessToken, refreshToken });
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }    

}

module.exports = userController