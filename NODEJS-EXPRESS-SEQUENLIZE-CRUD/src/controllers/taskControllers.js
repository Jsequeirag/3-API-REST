const Task = require("../models/Task");
const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      projectId,
      name,
      done,
    });
    res.status(200).json(newTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      attributes: ["name", "projectId", "done", "id"],
      where: { id },
    });

    task.set(req.body);

    await task.save();

    res.json(task);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};
const getTasks = async (req, res) => {
  try {
    const task = await Task.findAll({
      attributes: ["id", "projectId", "name", "done"],
      order: [["id", "DESC"]],
    });
    res.json(task);
  } catch {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id },
      attributes: ["id", "projectId", "name", "done"],
    });
    res.status(200).json(task);
  } catch (e) {
    return res.status(500).json({ messge: e });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};
module.exports = {
  createTask,
  getTasks,
  deleteTask,
  getTaskById,
  updateTask,
};
