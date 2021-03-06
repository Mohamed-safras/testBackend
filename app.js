const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv/config");
const postRoute = require("./routers/post");
const app = express();
/*-------------------------------------middleware---------------------------------------------*/
app.use(bodyparser.json());
app.use("/", postRoute);
/*-------------------------------------DATABASE CONNECTION------------------------------------*/
const monogoUrl = process.env.DB_CONNECTION;
const monogoConnectionEssiential = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(monogoUrl, monogoConnectionEssiential, (error) => {
  if (error) {
    console.log(error);
  }
  return console.log("Connection to mongoDB was successfull");
});
/*-------------------------------------LISTNING------------------------------------*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});
