import mongoose from "mongoose";
const { Schema } = mongoose;

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        // type: Date,
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
   
    });

    export default mongoose.model("Event", EventSchema);