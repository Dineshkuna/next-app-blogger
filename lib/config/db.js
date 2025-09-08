import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://nextblogapp:nextblogapp@cluster0.nvdk5sr.mongodb.net/blog-app')
    console.log("DB Connected");
    
}

