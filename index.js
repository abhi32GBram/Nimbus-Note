const express = require("express");
const { connection } = require("mongoose");
const app = express();
require("dotenv").config();
const Port = process.env.PORT;

app.listen(Port, async () => {
  try {
    await connection;
    console.log("CONNECTED TO MONGODB SUCCESFULLY ");
  } catch (error) {
    console.log(error);
  }

  console.log("SERVER IS NOW RUNNING / LISTENING AT PORT : ", Port);
});
