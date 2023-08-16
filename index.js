import express from 'express';
import { getCities } from './controllers/citiesController.js';

const PORT = 4000;

const app = express();

app.get('/', (req,res)=>{
    console.log(req);
    res.send('hola');
})

app.get('/api/cities', getCities)

app.listen(PORT, ()=>{
    console.log('hola');
})