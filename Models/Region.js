import mongoose, { Schema, model } from "mongoose";

const regionSchema = Schema({
    region: {type: String, require: true},
    image: {type: String, require: true},
    cities: [{type: mongoose.Types.ObjectId, ref: 'City'}]
},{
    timestamps: true
});

const Region = model('region', regionSchema);

export default Region;
