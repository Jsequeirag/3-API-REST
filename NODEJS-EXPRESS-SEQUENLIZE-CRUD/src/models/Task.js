const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    done: { type: DataTypes.BOOLEAN, defaultValue: false },
    projectId: { type: DataTypes.INTEGER },
  },
  { timestamps: false }
);
module.exports = Task;
