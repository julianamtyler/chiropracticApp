const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chiroApp");
mongoose.connect(process.env.MONGODB_URI || "mongodb://chiro:chiro1@ds155864.mlab.com:55864/heroku_d3pj1n02", { useNewUrlParser: true });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




//didnt work with there
// app.use(express.static(__dirname + '/public'))
// app.get('*', function (request, res){
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join('build', 'index.html'));
//   });
// }
////////////////////////////////////////////////////////////////////////////
