import { Router } from "express";
import citiesController from "../controllers/citiesController.js";

const citiesRouter = Router()

const { getAllCities, getCity, createCity, deleteCity, getLastIdCity } = citiesController;

citiesRouter.post('/', createCity);
citiesRouter.get('/', getAllCities);
citiesRouter.get('/xxx/', getLastIdCity);
citiesRouter.get('/:id', getCity);
citiesRouter.delete('/delete/:id', deleteCity);

export default citiesRouter;