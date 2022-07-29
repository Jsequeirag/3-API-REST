const router = require("express").Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
} = require("../controllers/projectControllers.js");

router.get("/projects", getProjects);
router.post("/project", createProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);
router.get("/project/:id", getProjectById);

module.exports = router;
