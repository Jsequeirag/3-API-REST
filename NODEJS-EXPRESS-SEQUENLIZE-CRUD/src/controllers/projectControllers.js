const Project = require("../models/Projects");
const Task = require("../models/Task");
//getProjects
const getProjects = async (req, res) => {
  try {
    const Projects = await Project.findAll();
    res.json(Projects);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
};
//getCreateProject
const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(200).json(newProject);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
};
const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    project.name = req.body.name;
    project.priority = req.body.priority;
    project.description = req.body.description;
    await project.save();
    res.status(200).json(project);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { projectId: id } });
    await Project.destroy({ where: { id } });
    res.status(200);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
};
const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    res.status(200).json(project);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};
module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
