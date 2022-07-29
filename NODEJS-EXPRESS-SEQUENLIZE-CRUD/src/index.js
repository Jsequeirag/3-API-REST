const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const sequelize = require("./database.js");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- product -------------------------------- */
const productRoutes = require("./routes/projectRoutes");
app.use(productRoutes);
const taskRoutes = require("./routes/taskRoutes");
app.use(taskRoutes);
//server and database connection
async function serverStartup() {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("database connected");
    app.listen("3001", () => {
      console.log("server:3001");
    });
  } catch (e) {
    console.error(e);
  }
}
serverStartup();
