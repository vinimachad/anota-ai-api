import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import createEvaluationHandle from "../modules/avaliations/methods/create/controller";
export const evaluationRoutes = Router()

evaluationRoutes.post("/", ensureAuthenticated, createEvaluationHandle)