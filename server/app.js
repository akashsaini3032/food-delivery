


// const express = require("express");
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
// require('dotenv').config(); // ✅ Load env first!


// const paymentRoute = require("./routes/payment");
// const adminRoute = require("./routes/adminRoute");
// const productRoute = require("./routes/productRoute");
// const userRoute = require("./routes/userRoute");



// const PORT = process.env.PORT || 8080;


// mongoose.connect(process.env.DBCON)
//     .then(() => console.log("DB Connected Successfully!"))
//     .catch(err => console.error("DB Connection Failed:", err));


// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());




// app.use("/admin", adminRoute);
// app.use("/product", productRoute);
// app.use("/user", userRoute);
// app.use("/api/payment", paymentRoute);



// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



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

mongoose.connect(process.env.DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Atlas Connected Successfully!"))
.catch(err => console.error("DB Connection Failed:", err));

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);
app.use("/api/payment", paymentRoute);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

