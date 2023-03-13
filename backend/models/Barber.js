import mongose from "mongose";

const BarberSchema = new mongose.Schema ({

    name:{type:String,required:true} ,
    lastname :{type:String,required:true},
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    tel:{type:String,required:true},
    location:{type:String,required:true},
    number:{type:String,required:true},
    address:{type:String,required:true},
    password1:{type:String, required:true},
    password2:{type:String, required:true},
    confirmationCode:{type:String,required:true},
    emailConfirmed:{type:Boolean,default:false},
    role:{type:String,enum:['user','barber','admin'],default:'barber'}

},{
    timestamps:true
}
)

const Barber = mongose.model('Barber',BarberSchema);

export default Barber;



