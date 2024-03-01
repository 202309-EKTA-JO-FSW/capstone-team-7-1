const express = require("express");

/////////
const userRoutes = require("./routes/user") 
const cors = require("cors");

require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use('/', userRoutes) // userRoutes 

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

module.exports = app;
