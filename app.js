const express = require("express");
require('dotenv').config();
const db = require("./config/db");
const router = require("./routes/tareasRouter");




const app = express();
app.use(express.json());

app.use("/tareas", router);

app.listen(process.env.PORT, () => {
  console.log("servidor corriendo");
});
