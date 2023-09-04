import mongoose, { Schema, model } from "mongoose";

const tinerarySchema = Schema({
    img: {type: String, require: true},
    title: {type: String, require: true},
    info: {type: String, require: true},
    price: {type: String, require: true},
    duration: {type: String, require: true},
    city: {type: mongoose.Types.ObjectId, ref: 'City', require: true}
},{
    timestamps: true
});

const Tinerary = model('tinerary', tinerarySchema);

export default Tinerary;
