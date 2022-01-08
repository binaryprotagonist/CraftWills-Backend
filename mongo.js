const mongoose = require("mongoose");
require("dotenv").config();
const url = "mongodb+srv://Ankur123:djdjank123@ankur0.221bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database"))
  .catch((err) => {
console.log(err)})
    