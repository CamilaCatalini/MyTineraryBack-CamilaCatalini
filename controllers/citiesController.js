import City from '../Models/City.js';
import Region from '../Models/Region.js';

const citiesController = {

    getAllCities:async (req, res) =>{
        const cities = await City.find();

        const r = {
            status : 200,
            cities: cities
        }
        res.json(r);
    },

    getCity:async (req, res) =>{

        try{
            const { id } = req.params;
            const city = await City.find({_id : id});

            const r = {
                status : 200,
                city: city
            }
            res.json(r);
        } catch(error) {
            console.log(error);
        }
    },

    createCity:async (req, res) =>{

        try{
            const newCity = new City(req.body);
            const region = await Region.findOne({region: req.body.region});

            newCity.region = region._id;
            const city = await City.create(newCity)
            await Region.findOneAndUpdate({_id : newCity.region},{ $push: {cities: city._id} });
        } catch(error) {
            console.log(error);
        }

        const r = {
            status : 200,
        }
        res.json(r);
    }
    
}

export default citiesController;