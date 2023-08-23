import { Router } from "express";
import citiesController from "../controllers/citiesController.js";

const citiesRouter = Router()

const { getAllCities, getCity, createCity } = citiesController;

citiesRouter.get('/', getAllCities);
citiesRouter.post('/', createCity);
citiesRouter.get('/:id', getCity);

export default citiesRouter;