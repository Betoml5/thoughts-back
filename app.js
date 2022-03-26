const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { config } = require("./config");

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.dbUser}:${config.dbPassword}${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

connectDB();

module.exports = app;
