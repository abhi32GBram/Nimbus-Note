const express = require("express");
const cors = require("cors")
const { connection } = require("mongoose");
const { userRouter } = require("./routes/user.routes");

const app = express();

require("dotenv").config();
const Port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

app.get("/",(req,res) => 
{
  res.send({
    message: "THE API IS NOW WORKING !!! "
  })
})

app.listen(Port, async () => {
  try {
    await connection;
    console.log("CONNECTED TO MONGODB SUCCESSFULLY ");
  } catch (error) {
    console.log(error);
  }

  console.log("SERVER IS NOW RUNNING / LISTENING AT PORT : ", Port);
});
