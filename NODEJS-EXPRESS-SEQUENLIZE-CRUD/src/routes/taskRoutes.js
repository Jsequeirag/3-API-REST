const router = require("express").Router();
const {
  createTask,
  getTasks,
  deleteTask,
  getTaskById,
  updateTask,
} = require("../controllers/taskControllers");

router.get("/tasks", getTasks);
router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
router.get("/task/:id", getTaskById);

module.exports = router;
