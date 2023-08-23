import City from '../Models/City.js';
import Region from '../Models/Region.js';

const regionsController = {

    getRegions:async (req, res) =>{

        try{
            const regions = await Region.find();

            const r = {
                status : 200,
                regions: regions
            }
            res.json(r);
        } catch(error) {
            console.log(error);
        }

    },

    getOneRegion:async (req, res) =>{

        try{
            const { name_region } = req.params;
            const region = await Region.find({region : name_region}).populate({
                path: 'cities',
                select: 'title img',
                model: City
            });

            const r = {
                status : 200,
                region: region
            }
            res.json(r);
        } catch(error) {
            console.log(error);
        }

    },
    
    createRegion:async (req, res) =>{

        try{
            const newRegion= new Region(req.body);
            await newRegion.save();
        } catch(error) {
            console.log(error);
        }

        const r = {
            status : 200,
        }
        res.json(r);
    }
    
}

export default regionsController;