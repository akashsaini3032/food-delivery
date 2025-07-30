// const { OAuth2Client } = require('google-auth-library');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// exports.googleLogin = async (req, res) => {
//     const { token } = req.body;

//     try {
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });

//         const { name, email, picture } = ticket.getPayload();

//         let user = await User.findOne({ email });

//         if (!user) {
//             user = new User({
//                 name,
//                 email,
//                 profilePic: picture,
//                 fromGoogle: true,
//             });
//             await user.save();
//         }

//         const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

//         res.status(200).json({ token: jwtToken, user });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: 'Google Login Failed' });
//     }
// };





const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const { name, email, picture } = ticket.getPayload();

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({
                name,
                email,
                profilePic: picture,
                fromGoogle: true,
            });
            await user.save();
        }

        const jwtToken = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || process.env.TOKEN_SECRET,  // ✅ Handle both cases
            { expiresIn: '7d' }
        );

        res.status(200).json({
            accessToken: jwtToken,  // ✅ Consistent token name
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePic: user.profilePic
            }
        });

    } catch (error) {
        console.error('Google Login Error:', error);
        res.status(400).json({ message: 'Google Login Failed' });
    }
};
