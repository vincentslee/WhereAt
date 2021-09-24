const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/api-routes.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

// API routes for schema
const dataRouter = require('./routes/data-route.js');
app.use('/data', dataRouter)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//// IMPORTANT ////
//// IMPORTANT ////
//// IMPORTANT ////
//// IMPORTANT ////
// Currently the IP whitelist is OFF
// Connect to the Mongo DB
//const URI = "mongodb+srv://Vincent:Gd9pRQc3z5m5AS9@main.si0nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URI = "mongodb+srv://Vincent:Gd9pRQc3z5m5AS9@cluster0.prwtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(URI,
  err => {
    if(err) throw err;
    console.log('connected to MongoDB')
  }).catch(err => res.status(400).json('Error + ' + err)); 
  
mongoose.connection.once('open', ()=>{
  console.log("MongoDB connection established");
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});