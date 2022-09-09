const express = require("express");
const app = express();
const users = require("./routes/users");

//middlewares

app.use(express.json());

//routes
app.use("/api/v1/users", users); //route

const port = 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
