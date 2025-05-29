import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
    },
    profileImage: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/036/885/313/small/blue-profile-icon-free-png.png",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verifacationToken: {
        type: String,
        default: null,
    },
    passwordResetToken:{
        type: String,
        default: null,
    },
     passwordResetExpires:{
        type: Date,
        default: null,
    }
},{
    timestamps:true,
    versionKey:false,
})


export default mongoose.model("User",userSchema)