// import express from 'express';
// import Event from '../models/Users.js'; 
// const router = express.Router();

// router.post('/', async (req, res) => {
//     console.log(res.body);
//     try {
//         console.log('POST /users called');
//         const userData = req.body;
//         const newUser = new User(userData);
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error('Error saving user:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

// export default users
import express from 'express';
import User from '../models/Users.js'; // Import the User model
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post('/sign', upload.single('profilePic'), async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create a new user
        const newUser = new User({
            username,
            password,
        });

        // Save the profile picture if it exists
        if (req.file) {
            const profilePicBuffer = req.file.buffer;
            const profilePicBase64 = profilePicBuffer.toString('base64');
            newUser.profilePic = profilePicBase64;
        }

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
  try {
      const { username, password } = req.body;
      console.log("username", username);
      // Find the user by username
      const user = await User.findOne({ username });

      // If user not found or password doesn't match, return error
      if (!user ) {
          return res.status(401).json({ message: 'Invalid username or password' });
      }

      // If username and password are correct, return success message
      res.status(200).json({ message: 'Login successful' });
  } catch (error) {
      console.error('Error during login', error);
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
      const user = await User.findOne({ username: req.params.username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    const { newRequest } = req.body; 

    try {
        
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

    
        await user.updateRequests(newRequest);

    
        return res.status(200).json({ message: 'Requests field updated successfully', user });
    } catch (error) {
        console.error('Error updating requests field:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
  
router.delete('/:userId/requests/:requestId', async (req, res) => {
  const { userId, requestId } = req.params;
  const user = await User.findById(userId);
try{
  if (!user) {
    // Handle case where user is not found
    return res.status(404).json({ message: 'User not found' });
  }

  // Use $pull operator to remove the specific request from the array
  user.requests.pull(requestId);

  // Save the updated user document
  await user.save();

  return res.status(200).json({ message: 'Request deleted successfully', user });
} catch (error) {
  
  return res.status(500).json({ message: 'Internal Server Error' });
}
  
});

export default router;
