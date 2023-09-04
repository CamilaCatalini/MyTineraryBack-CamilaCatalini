import mongoose, { Schema, model } from "mongoose";

const citySchema = Schema({
    img: {type: String, require: true},
    title: {type: String, require: true},
    info: {type: String, require: true},
    location: [{type: Object , require: true}],
    currency: {type: String, require: true},
    region: {type: mongoose.Types.ObjectId, ref: 'Region', require: true},
    tineraries: [{type: mongoose.Types.ObjectId, ref: 'Tinerary'}],
    likes: {type: Number}
},{
    timestamps: true
});

const City = model('city', citySchema);

export default City;

