import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import createEvaluationHandle from "../modules/avaliations/methods/create/controller";
import findAvaliationsByRestaurantIdHandle from "../modules/avaliations/methods/findByRestaurantId/findByRestaurantIdController";
export const evaluationRoutes = Router()

evaluationRoutes.post("/", ensureAuthenticated, createEvaluationHandle)
evaluationRoutes.get("/restaurant", ensureAuthenticated, findAvaliationsByRestaurantIdHandle)