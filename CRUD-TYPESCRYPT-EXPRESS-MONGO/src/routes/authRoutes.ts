import { Router } from "express";
import { userModel } from "../Models/userModel";
const router = Router();

router.post("/signup", async (req, res) => {
  var user = await userModel.findOne({ username: req.body.username });
  if (user)
    return res.status(400).json({ message: "this username already exists" });
  user = await userModel.findOne({ email: req.body.email });
  if (user)
    return res.status(400).json({ message: "this email already exists" });

  const newUser = new userModel(req.body);
  console.log(newUser);
});
router.post("/signin", (req, res) => {
  console.log("signup");
});
export default router;
