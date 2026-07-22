import Router from "express";
import * as authController from "./auth.controller";
const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/verify-email", verifyEmailHandler);
authRouter.post("/resend-verification", authController.resendVerification);
authRouter.post("/refresh", authController.refresh);
authRouter.post("/forgot-password", authController.forgotPasswordHandler);
authRouter.post("/reset-password", authController.resetPasswordHandler);
authRouter.post("/profile", authenticate, authController.profile);
authRouter.post("/admin/users", authController.admin);
authRouter.post("logout", authController.logout);

export default authRouter;
