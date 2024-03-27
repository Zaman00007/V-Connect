import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // unique: true,
    },
    username: {
        type: String,
        // required: true,
        // unique: true,
    },
    password: {
        type: String,
        // required: true,
    },
    profilePic: {
        type: String,
    },
});

export default mongoose.model("User", UserSchema);
