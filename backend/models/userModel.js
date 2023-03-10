const mongose = require('mongoose');

const UserSchema = new mongose.Schema ({

    firstname:{type:String,required:true} ,
    lastname :{type:String,required:true},
    email:{type:String,required:true},
    tel:{type:String,required:true},
    password:{type:String, required:true},
    role:{type:String,enum:['user','barber','admin'],default:'user'}

},{
    timestamps:true
}
)


const User = mongose.model('User',UserSchema);

module.exports = User;