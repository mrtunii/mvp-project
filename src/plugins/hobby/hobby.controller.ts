import Boom from "boom";
import User from "../../models/user.model";
import { IExtendedRequest } from "../../interfaces/request.interface";
import Hobby from "../../models/hobby.model";

export default class HobbyController {
    constructor() { }

    public async create(request: IExtendedRequest) {
        try {
            const payload: any = request.payload;

            const newHobby = new Hobby({
                name: payload.name,
                passionLevel: payload.passionLevel,
                year: payload.year
            });
            const savedHobby = await newHobby.save();

            const user = await User.findById(request.params.userId).populate('hobbies').exec();
            user.hobbies.push(savedHobby);
            user.save();

            return {
                message: `Successfully created new hobby: ${savedHobby.name}`,
                payload: { user: user }
            };
        } catch (e) {
            return Boom.boomify(e);
        }
    }

    public async delete(request: IExtendedRequest) {
        try {
            const payload: any = request.payload;
            const params: any = request.params;

            //remove hobby from user
            await User.findByIdAndUpdate(params.userId, {
                $pull: { hobbies: payload.hobbyId }
            });

            //delete hobby
            await Hobby.findByIdAndDelete(payload.hobbyId);
            return {
                message: `Successfully deleted hobby`
            };

        } catch (e) {
            return Boom.boomify(e);
        }
    }
}