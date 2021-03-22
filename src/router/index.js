import { Router } from "express";
import user from "./user";

const router = Router();

router.use("/user", user); //路由,網址名稱
// (req, res) => {
//   res.status(200).json({ Message: "Hiffff" });
// });

export default router;
