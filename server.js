const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbuser:Parker88@cluster0.hrzcp.mongodb.net/dbWorkout?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = require("./models");

require("./routes/api-route")(app);
require("./routes/html-route")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});