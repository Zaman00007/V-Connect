import mongoose from "mongoose";
const { Schema } = mongoose;

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    // address: {
    //     type: String,
    //     required: true,
    // },
    // distance: {
    //     type: String,
    //     required: true,
    // }, 
    // photos: {
    //     type: [String],
        
    // }, 
    // description: {
    //     type: String,
    //     required: true,
    // },
    // rating: {
    //     type: Number,
    //     min: 0,
    //     max: 5,
    // },
    // cheapestPrice: {
    //     type: Number,
    //     required: true,
    // },
    // fetured: {
    //     type: Boolean,
    //     default: false,
    // },
    // rooms: {
    //     type:[String]
    // }


    // rooms: [
    //     {
    //     type: Schema.Types.ObjectId,
    //     ref: "Room",
    //     },
    // ],
    });

    export default mongoose.model("Event", EventSchema);