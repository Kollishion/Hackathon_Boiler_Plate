import { Router } from "express";
import { changeUserRole, changeUserStatus, listUsers } from "./admin.controller";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/users", authenticate, authorize("ADMIN"), listUsers);
router.patch("/users/:userId/role", authenticate, authorize("ADMIN"), changeUserRole());
router.patch("/users/:userId/status", authenticate, authorize("ADMIN"), changeUserStatus());

