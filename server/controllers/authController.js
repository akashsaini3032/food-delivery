// import jwt from 'jsonwebtoken';
// import { OAuth2Client } from 'google-auth-library';
// import User from '../models/userModel.js';

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// export const googleLogin = async (req, res) => {
//     try {
//         const { token } = req.body;

//         // Verify Google Token
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });

//         const payload = ticket.getPayload();
//         const { email, name, sub: googleId } = payload;

//         // Check if user exists
//         let user = await User.findOne({ email });

//         if (!user) {
//             // Create new user if not exists
//             user = new User({
//                 email,
//                 username: name,
//                 googleId,
//                 password: "", // password empty since it's Google auth
//             });
//             await user.save();
//         }

//         // Create JWT token
//         const jwtToken = jwt.sign(
//             { id: user._id, email: user.email },
//             process.env.JWT_SECRET,
//             { expiresIn: '7d' }
//         );

//         res.json({
//             token: jwtToken,
//             username: user.username,
//             message: 'Google login successful'
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(400).json({ message: 'Google login failed', error: err.message });
//     }
// };



import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/userModel.js';

export const googleLogin = async (req, res) => {
    try {
        const { token: access_token } = req.body;

        // Use access_token to get user info from Google
        const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const { email, name, sub: googleId, picture } = response.data;

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if not exists
            user = new User({
                email,
                username: name,
                googleId,
                profilePic: picture,
                password: "", // No password for Google users
                fromGoogle: true
            });
            await user.save();
        }

        // Create JWT token
        const jwtToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token: jwtToken,
            user,
            message: 'Google login successful'
        });

    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Google login failed', error: err.message });
    }
};

