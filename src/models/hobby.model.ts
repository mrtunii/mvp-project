import * as Joi from 'joi';

import mongoose, { Schema, Document } from "mongoose";


export interface HobbyInterface extends Document {
    name: string,
    passionLevel: string,
    year: number
}

const HobbyModel = new Schema({
    name: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Hobby = mongoose.model<HobbyInterface>("Hobby", HobbyModel);

export default Hobby;