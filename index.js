import 'dotenv/config.js'
import express from 'express';
import indexRouter from './router/indexRouter.js';
import cors from 'cors';

import './config/database.js';

const app = express();

app.use(cors()) ;
app.use(express.json());

app.use('/api', indexRouter);

app.listen(process.env['PORT'], ()=>{});