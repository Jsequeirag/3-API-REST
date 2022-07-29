const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgresql://postgres:eaMOTx6hpfgaXlxpEMLa@containers-us-west-76.railway.app:8007/railway"
);
module.exports = sequelize;
