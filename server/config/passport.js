// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/google/redirect"
// },
// async (accessToken, refreshToken, profile, done) => {
//     try {
//         let user = await User.findOne({ email: profile.emails[0].value });

//         if (!user) {
//             user = new User({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 password: "", 
//                 googleId: profile.id,
//             });
//             await user.save();
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//         return done(null, { user, token });

//     } catch (err) {
//         return done(err, null);
//     }
// }
// ));



// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_REDIRECT_URI  // ✅ Use .env variable
// },
// async (accessToken, refreshToken, profile, done) => {
//     try {
//         let user = await User.findOne({ email: profile.emails[0].value });

//         if (!user) {
//             user = new User({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 password: "",  // No password since it's Google login
//                 fromGoogle: true,   // ✅ Mark as Google user
//                 profilePic: profile.photos[0]?.value  // ✅ Save Google profile pic
//             });
//             await user.save();
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//         return done(null, { user, token });

//     } catch (err) {
//         return done(err, null);
//     }
// }
// ));


const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URI,  // ✅ Use .env variable properly
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails[0].value;

            let user = await User.findOne({ email });

            if (!user) {
                user = new User({
                    name: profile.displayName,
                    email: email,
                    password: "",  // Google login so password is blank
                    fromGoogle: true,  // ✅ Indicate Google login
                    profilePic: profile.photos[0]?.value || ""  // ✅ Handle profile pic
                });

                await user.save();
            }

            // ✅ JWT Generation
            const token = jwt.sign(
                { id: user._id },
                process.env.TOKEN_SECRET, // ✅ Use consistent env variable name
                { expiresIn: "7d" }
            );

            return done(null, { user, token });

        } catch (err) {
            console.error("Google Auth Error:", err);
            return done(err, null);
        }
    }
));


