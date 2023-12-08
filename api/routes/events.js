import express from "express";
import Event from "../models/Events.js";
const router = express.Router();

router.post("/", async (req, res) => {
    const newEvent = new Event(req.body);
    try{
        
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    }catch(err){
        res.status(500).json(err);
    }
});


export default router;