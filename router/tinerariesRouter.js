import { Router } from "express";
import tinerariesController from "../controllers/tinerariesController.js";

const tinerariesRouter = Router()

const { createTinerary, getTineraries, getTinerary } = tinerariesController;

tinerariesRouter.get('/', getTineraries)
tinerariesRouter.get('/:id', getTinerary)
tinerariesRouter.post('/', createTinerary);

export default tinerariesRouter;