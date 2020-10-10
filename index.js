// import
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });
var db = mongoose.connection;

if (!db)
  console.log("Error connecting to db")
else
  console.log("Db connected successfully")

var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('hello world'));
app.use('/api', apiRoutes);   // link /api to api routes and use in the app

app.listen(port, () => {      // Launch app to listen to specified port
  console.log(`e.g. app listening at http://localhost:${port}`)
});