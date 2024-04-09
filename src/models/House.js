import { Schema } from "mongoose";



export const HouseSchema = new Schema({
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    bedrooms: { type: Number, required: true, max: 30 },
    bathrooms: { type: Number, required: true, max: 25 },
    levels: { type: Number, required: true, max: 4 },
    price: { type: Number, required: true, max: 100000000 },
    imgURL: { type: String, required: true, maxLength: 500 },
    description: { type: String, maxLength: 500 },
    year: { type: Number, required: true, min: 1000, max: 2024 }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
}
);