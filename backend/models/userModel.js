const mongose = require('mongoose');


const UserSchema = new mongose.Schema ({

    username:{type:String,required:true} ,
    userlastname :{type:String,required:true},
    useremail:{type:String,required:true},
    usertel:{type:String,required:true},
    userpassword1:{type:String, required:true},
    userpassword2:{type:String, required:true},
    confirmationCode:{type:Number,required:true},
    emailConfirmed:{type:Boolean,default:false},
    role:{type:String,enum:['user','barber','admin'],default:'user'}

},{
    timestamps:true
})


UserSchema.path('userpassword1').validate(function(value){
    const user = this;
    return user.userpassword2 === value;
},'As senhas devem ser iguais')


UserSchema.path('userpassword2').validate(function(value){
    const user = this;
    return user.userpassword1 === value;
},'As senhas devem ser iguais')



const User = mongose.model('User',UserSchema);

module.exports = User;