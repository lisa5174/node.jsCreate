import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.get("/", UserController.getUser);
router.post("/", UserController.postUser);
// router.use("/", (req, res) => {
//   res.status(200).json({ Message: "Hfkdjfffff" });
// });

export default router;
