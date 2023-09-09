import City from '../Models/City.js';
import Tinerary from '../Models/Tinerary.js';

const tinerariesController = {

    getTineraries:async (req, res) =>{
        const tineraries = await Tinerary.find();

        const r = {
            status : 200,
            tineraries: tineraries
        }
        res.json(r);
    },

    getTinerary:async (req, res) =>{

        try{
            const { id } = req.params;
            const tinerary = await Tinerary.find({_id : id});

            const r = {
                status : 200,
                tinerary: tinerary
            }
            res.json(r);
        } catch(error) {
            console.log(error);
        }
    },

    getTinerariesForCity:async (req, res)=>{
        const city = req.params.id
        try{
            const itineraries = await Tinerary.find({city : city})
            const r = {
                status : 200,
                itinerary: itineraries
            }
            console.log(r)
            res.json(r);
        } catch(error) {
            console.log(error);
        }
    },

    createTinerary:async (req, res) =>{


        try{
            const newTinerary= new Tinerary(req.body);
            const tinerary = await Tinerary.create(newTinerary)
            await City.findOneAndUpdate({_id : newTinerary.city},{ $push: {tineraries: tinerary._id} });
        } catch(error) {
            console.log(error);
        }

        const r = {
            status : 200,
        }
        res.json(r);
    }
    
}

export default tinerariesController;