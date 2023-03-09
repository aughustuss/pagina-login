const moongose = require('mongoose')
const {Schema} = moongose.Schema


const UserSchema = new Schema ({

    username:{Type:String,required:true} ,
    userlastname :{Type:String,required:true},
    useremail:{Type:String,required:true},
    usertel:{Type:String,required:true},
    userpassword:{Type:String, required:true},
    role:{Type:String,enum:['user','barber','admin'],default:'user'}

        
},{
    timestamps:true
}
)

const User = moongose.model('User',UserSchema);

module.exports = User;