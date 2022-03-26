const express = require("express");
const app = express();

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.dbUser}:${config.dbPassword}@pagos-tec.mih9c.mongodb.net/pagos-tec-db?retryWrites=true&w=majority`
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}

connectDB();

app.listen(2424, () => {
  console.log("server listenting at port 2424");
});

module.exports = app;
