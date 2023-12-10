// import express from "express";
// import Event from "../models/Events.js";
// const router = express.Router();

// router.post("/", async (req, res) => {
//     const newEvent = new Event(req.body);
//     try{
        
//         const savedEvent = await newEvent.save();
//         res.status(200).json(savedEvent);
//     }catch(err){
//         res.status(500).json(err);
//     }
// });


// export default router;

import express from 'express';
import Event from '../models/Events.js'; // Import the Event model
const router = express.Router();

// Define your routes using the Event model

router.post('/', async (req, res) => {
    try {
        const eventData = req.body;
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
