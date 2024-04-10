import express from 'express';
import Event from '../models/Events.js'; 
import Accept from '../models/Accept.js'; 
const router = express.Router();

// Define your routes using the Event model

router.post('/', async (req, res) => {
    console.log(res.body);
    try {
        console.log('POST /events called');
        const eventData = req.body;
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/accept', async (req, res) => {
  console.log(res.body);
  try {
      console.log('POST /events called');
      const eventData = req.body;
      const newEvent = new Accept(eventData);
      await newEvent.save();
      res.status(201).json(newEvent);
  } catch (error) {
      console.error('Error saving event:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default router;
