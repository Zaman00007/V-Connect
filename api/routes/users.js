import express from 'express';
import User from '../models/Users.js'; // Import the User model
import multer from 'multer';
import bcrypt from 'bcryptjs';

const router = express.Router();
const upload = multer();

router.post('/signup', upload.single('profilePic'), async (req, res) => {
    try {
        const { username, password, gender, age } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password , salt);
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const newUser = new User({
            username: username,
            password: hash,
            gender :gender,
            age : age,
        });
        if (req.file) {
            const profilePicBuffer = req.file.buffer;
            const profilePicBase64 = profilePicBuffer.toString('base64');
            newUser.profilePic = profilePicBase64;
        }
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/login', upload.single('profilePic'), async (req, res) => {
  try {
      const { username, password, gender, age } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password , salt);
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
      }
      const newUser = new User({
          username: username,
          password: hash,
          gender :gender,
          age : age,
      });
      if (req.file) {
          const profilePicBuffer = req.file.buffer;
          const profilePicBase64 = profilePicBuffer.toString('base64');
          newUser.profilePic = profilePicBase64;
      }
      await newUser.save();

      res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
      console.error('Error during signup', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/profile-pic/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });
  
      if (!user || !user.profilePic) {
        return res.status(404).json({ message: 'Profile picture not found' });
      }
  
      // Assuming profilePic is stored as a base64 string
      const base64Image = user.profilePic;
      const imageBuffer = Buffer.from(base64Image, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/jpg', // Adjust content type based on your file type
        'Content-Length': imageBuffer.length,
      });
      res.end(imageBuffer);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/:username', async (req, res) => {
    try {
        // Extract the username from the request parameters
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  

export default router;
