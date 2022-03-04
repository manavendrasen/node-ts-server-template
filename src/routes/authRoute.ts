import { Router } from "express";
import {
  getMe,
  login,
  register,
  deleteUser,
  refreshToken,
} from "../controller/authController";
import { protect } from "../middleware/auth";

const router = Router({ mergeParams: true });

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.post("/refresh-token", refreshToken);

export = router;
