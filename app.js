const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { config } = require("./config");

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.dbUser}:${config.dbPassword}@pagos-tec.mih9c.mongodb.net/pagos-tec-db?retryWrites=true&w=majority`
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

connectDB();

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});

module.exports = app;
