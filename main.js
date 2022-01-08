// const express = require("express")
// const app = express()
// const userrouter= require("./routes/user.route")
// const mongoose = require("mongoose");
// const url = "mongodb+srv://Ankur123:djdjank123@ankur0.221bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database has been connected!"))
//   .catch((err) => {
//     console.log(err)
//   });
// app.use("/user",userrouter)

// const PORT = process.env.PORT || 3000;
// app.listen(PORT,()=>{
//     console.log(`app listening on port ${PORT}`)
// })


// module.exports = app

//////////////////////////
require("dotenv").config();
require("./mongo");
const express = require("express");
const userRouters = require("./routes/user.route");
// const bankRouters = require ("./routes/bank.route")
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/users", userRouters);
// app.use("/",bankRouters)
app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});

/////////////////////
