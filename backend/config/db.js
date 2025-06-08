import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://chandrasekhar:notdeadyet@cluster0.ge4n6kp.mongodb.net/trial0').then(()=>console.log("DB Connected"));
}
