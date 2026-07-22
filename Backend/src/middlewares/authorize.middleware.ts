import type { Request, Response, NextFunction } from "express";

export const authorize = (...allowedRoles: Array<"USER" | "ADMIN">) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.user?.role;
    if (!role || !allowedRoles.includes(role as "USER" | "ADMIN")) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: insufficient permissions.",
      });
    }
    next();
  };
};
