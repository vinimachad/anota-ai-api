import { Router } from "express";
import { change } from "./change.routes";

export const routes = Router()

routes.use('/', change)