import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
import regionsRouter from "./regionsRouter.js";
import tinerariesRouter from "./tinerariesRouter.js";

const indexRouter = Router();


indexRouter.get('/',(req,res)=>{
    console.log(req);
});

indexRouter.use('/cities', citiesRouter);
indexRouter.use('/regions', regionsRouter);
indexRouter.use('/tineraries', tinerariesRouter);


export default indexRouter;