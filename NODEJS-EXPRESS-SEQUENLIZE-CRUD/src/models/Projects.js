const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Task = require("./Task");
const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  { timestamps: false }
);
//modelos relacionados con Project
Project.hasMany(Task, {
  foreignKey: "projectId",
  targetId: "id",
});
Task.belongsTo(Project, {
  foreignKey: "projectKey",
  targetId: "id",
});
module.exports = Project;
