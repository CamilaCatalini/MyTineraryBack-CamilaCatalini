import { Router } from "express";
import tinerariesController from "../controllers/tinerariesController.js";

const tinerariesRouter = Router()

const { createTinerary, getTineraries, getTinerary, getTinerariesForCity } = tinerariesController;

tinerariesRouter.get('/', getTineraries);

tinerariesRouter.get('/:id', getTinerary);
tinerariesRouter.get('/city-tineraries/:id', getTinerariesForCity);
tinerariesRouter.post('/', createTinerary);

export default tinerariesRouter;