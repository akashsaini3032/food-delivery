// const express = require("express");
// const app=express();
// const cors = require('cors');
// const bodyParser = require('body-parser')
// const mongoose= require("mongoose");





// const googleAuthRoute = require('./routes/googleAuthRoute');
// const googleAuthRedirectRoute = require('./routes/googleAuthRedirectRoute');



// const passport = require("passport");
// require("./config/passport");





// require('dotenv').config();

// const paymentRoute= require("./routes/payment");
// const AdminRoute = require("./routes/adminRoute");
// const ProductRoute = require("./routes/productRoute");
// const UserRoute = require("./routes/userRoute");

// const Port=process.env.PORT || 8080;
// mongoose.connect(process.env.DBCON).then(()=>{
//     console.log("DB Connected Succefully!")
// })
// app.use(cors());
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())
// // parse application/json
// app.use(bodyParser.json())


// app.use("/admin", AdminRoute);
// app.use("/product", ProductRoute);
// app.use("/user", UserRoute);
// app.use("/api/payment", paymentRoute);





// app.use('/api/auth', googleAuthRoute);
// app.use('/api/auth', googleAuthRedirectRoute);


// app.use(passport.initialize());



// app.listen(Port, ()=>{
//     console.log(`Server Run On Port ${Port}`);
// })


const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config(); // ✅ Load env first!


const paymentRoute = require("./routes/payment");
const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");



const PORT = process.env.PORT || 8080;


mongoose.connect(process.env.DBCON)
    .then(() => console.log("DB Connected Successfully!"))
    .catch(err => console.error("DB Connection Failed:", err));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);
app.use("/api/payment", paymentRoute);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
