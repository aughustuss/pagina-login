const moongose = require('mongoose')
const {Schema} = moongose.Schema


const BarberSchema = new Schema({

    storename :{Type:String,required:true} ,
    storelastname :{Type:String,required:true} ,
    storefullname:{Type:String,required:true} ,
    storeemail:{Type:String,required:true} ,
    storetel:{Type:String,required:true} ,
    storelocation:{Type:String,required:true} ,
    storenumber:{Type:String,required:true} ,
    storeadress:{Type:String,required:true} ,
    storepassword:{Type:String,required:true} ,
    role:{Type:String,enum:['user','barber','admin'],default:'barber'}

},{
    timestamps:true
})

const Barber = moongose.model('Barber',BarberSchema);

module.exports = Barber