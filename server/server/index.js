const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectToMongo = require("./db/connection");

// add this line..... 
const userRoutes = require("./routes/user");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// add this line .....
app.use("./routes/user.js", userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});


// const cartController=(req, res)=> { // http://localhost:80/cart?userId=hello
//   let data = decodeURI(req.query.userId);
//   res.json({you_sayed: data}); // { you_sayed: "hello" }
// }
// app.get('/cart', cartController) 

module.exports = app;
