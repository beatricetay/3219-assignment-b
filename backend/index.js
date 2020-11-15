let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./routes/api-routes");
let cors = require('cors');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

let mongodb =
  "mongodb+srv://beatricetay:fOVlm1h2CLWlFAAy@cluster0.dazde.mongodb.net/otottaskb?retryWrites=true&w=majority";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

if (!db)
  console.log("Error connecting to db")
else
  console.log("Db connected successfully")

var port = process.env.PORT || 8080;  // default port is 8080
app.get('/', (req, res) => {
  res.send('welcome back to your diary');
});

app.use('/api', apiRoutes);           // link api route

app.listen(port, () => {      // launch app to listen to specified port
  console.log(`e.g. Server started on port ${port}`)
});

module.exports = { app };
