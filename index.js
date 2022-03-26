const app = require("./app");
const { config } = require("./config");

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});
