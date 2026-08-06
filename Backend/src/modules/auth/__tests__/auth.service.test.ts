import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import bcrypt from "bcrypt";
import prisma from "../../../config/prisma";
import { loginUser, refreshAccessToken } from "../auth.service";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../utils/jwt";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {
    user: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    refreshToken: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  },
}));

jest.mock("bcrypt");

jest.mock("../../../utils/jwt", () => ({
  generateAccessToken: jest.fn(),
  generateRefreshToken: jest.fn(),
}));



describe("loginUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("logs in a valid user and returns tokens", async () => {
    const user = {
      id: "1",
      username: "user123",
      email: "test@example.com",
      password: "hashed-password",
      role: "USER",
      status: "ACTIVE",
      emailVerified: true,
      lastLoginAt: null,
      createdAt: new Date(),
    };

    (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue(user);
    (mockedBcrypt.compare as jest.Mock).mockResolvedValue(true);
    (mockerPrisma.user.update as jest.Mock).mockResolvedValue({
      ...user,
      lastLoginAt: new Date(),
    });

    (generateAccessToken as jest.Mock).mockResolvedValue("access-token");
    (generateRefreshToken as jest.Mock).mockResolvedValue("refresh-token");

    const result = await loginUser({
      email: "test@example.com",
      password: "password123",
    });

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: "test@example.com" },
    });

    expect(bcrypt.compare).toHaveBeenCalledWith(
      "password123",
      "hashed-password"
    );

    expect(prisma.user.update).toHaveBeenCalled();

    expect(prisma.refreshToken.create).toHaveBeenCalled();

    expect(result.accessToken).toBe("access-token");
    expect(result.refreshToken).toBe("refresh-token");
    expect(result.user.email).toBe("test@example.com");
  });
});
