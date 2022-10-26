const express = require("express");
const app = express();
const urlRoutes = require("./routes/urlRoutes");

app.use(express.json());

app.use("/", urlRoutes);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`Server listening port ${process.env.APP_PORT}`);
});
