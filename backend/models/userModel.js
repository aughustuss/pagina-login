const mongose = require('mongoose');


const UserSchema = new mongose.Schema ({

    username:{type:String,required:true} ,
    userlastname :{type:String,required:true},
    email:{type:String,required:true},
    useremail:{type:String,required:true},
    userpassword1:{type:String, required:true},
    userpassword2:{type:String, required:true},
    role:{type:String,enum:['user','barber','admin'],default:'user'}

},{
    timestamps:true
})

UserSchema.pre('save', function(next) {
    if (this.userpassword1 !== this.userpassword2) {
      const err = new Error('As senhas não são iguais');
      err.status = 400;
      return next(err);
    }
    next();
  });
  


const User = mongose.model('User',UserSchema);

module.exports = User;