import data from '../cities.js'

export const getCities = (req, res) =>{
    const r = {
        status : 200,
        count: data.lenght,
        cities: data
    }
    res.json(r)
}
