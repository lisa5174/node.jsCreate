import { Router } from "express";
import UserController from "../controllers/userController";
import UserMiddleware from "../middlewares/user";

const router = Router();

//GET: /api/user
//router.get("/", UserController.getUser);
//router.post("/", UserController.postUser);
router.post("/find", UserMiddleware.Authenticate);
// router.use("/", (req, res) => {
//   res.status(200).json({ Message: "Hfkdjfffff" });
// });

export default router;
