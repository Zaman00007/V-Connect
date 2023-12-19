import express from 'express';
import User from '../models/Users.js'; 
import multer from 'multer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken, verifyAdmin } from '../utils/verifyToken.js';

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
        const newUser = new User({username: username, password: hash, gender :gender, age : age, });
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
router.post('/login', async (req, res) => {
  try {
      const { username } = req.body;
      
      const existingUser = await User.findOne( {username} );
      if (!existingUser) {
          return res.status(400).json({ message: 'User does not exist' });
      }
      const isValidPassword = bcrypt.compareSync(req.body.password, existingUser.password);
      if (!isValidPassword) {
          return res.status(400).json({ message: 'Invalid password' });
      }
      const token = jwt.sign({ id: existingUser._id, isAdmin: existingUser.isAdmin }, process.env.JWT); 

      const {password, isAdmin, ...rest }=  existingUser._doc;
      

     res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true,
      // sameSite: "none",
     }).status(200).json({ ...rest })
    
  } catch (error) {
      console.error('Error during signup', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/check", verifyToken, (req, res, next) => {
  res.json({message : "Congo you are logged in!!!"});
})
router.get("/checkAdmin", verifyAdmin, (req, res, next) => {
  res.json({message : "Congo you are Admin!!!"});
})

router.get('/profile-pic/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });
  
      if (!user || !user.profilePic) {
        return res.status(404).json({ message: 'Profile picture not found' });
      }
      const base64Image = user.profilePic;
      const imageBuffer = Buffer.from(base64Image, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/jpg',
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
