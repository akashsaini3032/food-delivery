// const { google } = require('googleapis');
// const User = require('../models/userModel');
// const jwt = require('jsonwebtoken');

// const oauth2Client = new google.auth.OAuth2(
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     process.env.GOOGLE_REDIRECT_URI
// );

// exports.getGoogleAuthURL = (req, res) => {
//     const url = oauth2Client.generateAuthUrl({
//         access_type: 'offline',
//         prompt: 'consent',
//         scope: ['profile', 'email']
//     });

//     res.redirect(url);
// };

// exports.googleCallback = async (req, res) => {
//     const { code } = req.query;

//     try {
//         const { tokens } = await oauth2Client.getToken(code);
//         oauth2Client.setCredentials(tokens);

//         const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
//         const { data } = await oauth2.userinfo.get();

//         let user = await User.findOne({ email: data.email });

//         if (!user) {
//             user = new User({
//                 name: data.name,
//                 email: data.email,
//                 profilePic: data.picture,
//                 fromGoogle: true,
//             });
//             await user.save();
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

//         // Frontend redirect with token
//         res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
//     } catch (err) {
//         console.error(err);
//         res.status(400).send('Google OAuth Failed');
//     }
// };



const { google } = require('googleapis');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// ✅ Generate Google Auth URL
exports.getGoogleAuthURL = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: ['profile', 'email']
    });

    res.redirect(url);
};

// ✅ Handle Google OAuth2 Redirect Callback
exports.googleCallback = async (req, res) => {
    const { code } = req.query;

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
        const { data } = await oauth2.userinfo.get();

        // ✅ Check if user exists
        let user = await User.findOne({ email: data.email });

        if (!user) {
            user = new User({
                name: data.name,
                email: data.email,
                profilePic: data.picture,
                fromGoogle: true
            });
            await user.save();
        }

        // ✅ Create JWT Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // ✅ Frontend Redirect with Token & User Info
        const frontendURL = `http://localhost:5173/oauth-success?token=${token}&username=${encodeURIComponent(user.name)}&profilePic=${encodeURIComponent(user.profilePic || '')}`;
        
        res.redirect(frontendURL);

    } catch (err) {
        console.error("Google OAuth Error:", err);
        res.status(400).send('Google OAuth Failed');
    }
};
