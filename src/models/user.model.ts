import * as Joi from 'joi';

import mongoose, { Schema, Document } from "mongoose";


export interface UserInterface extends Document {
    name: string,
    hobbies: object[]
}

const UserModel = new Schema({
    name: {
        type: String
    },
    hobbies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Hobby'
        }
    ]
}, {
    timestamps: true
});

const User = mongoose.model<UserInterface>("User", UserModel);

export default User;