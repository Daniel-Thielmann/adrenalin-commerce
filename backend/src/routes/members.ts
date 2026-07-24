import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { authMiddleware } from "../middlewares/auth";
import * as memberService from "../services/members";

export const memberRoutes = Router();

memberRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const query = (req.query.q as string) || "";
    const result = await memberService.listAllMembersPaginated(page, query);
    res.json(result);
  })
);

memberRoutes.get(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const member = await memberService.getMemberById(Number(req.params.id));
    res.json(member);
  })
);

memberRoutes.post(
  "/",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const member = await memberService.createMember(req.body);
    res.status(201).json(member);
  })
);

memberRoutes.put(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const member = await memberService.updateMember(Number(req.params.id), req.body);
    res.json(member);
  })
);

memberRoutes.delete(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    await memberService.deleteMember(Number(req.params.id));
    res.status(204).send();
  })
);