import { Router } from "express";
import regionsController from "../controllers/regionsController.js";

const regionsRouter = Router()

const { createRegion, getOneRegion, getRegions } = regionsController;

regionsRouter.get('/', getRegions)
regionsRouter.get('/:name_region', getOneRegion)
regionsRouter.post('/', createRegion);

export default regionsRouter;