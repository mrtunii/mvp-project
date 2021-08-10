import Boom from "boom";
import User from "../../models/user.model";
import { IExtendedRequest } from "../../interfaces/request.interface";

export default class UserController {
    constructor() { }

    public async create(request: IExtendedRequest) {
        try {

            const payload: any = request.payload;

            const newUser: any = new User({ name: payload.name });
            const savedUser = await newUser.save();
            return {
                message: `Successfully created new user: ${savedUser.name}`,
                payload: { user: savedUser }
            };
        } catch (e) {
            return Boom.boomify(e);
        }
    }

    public async getAll(request: IExtendedRequest) {
        try {
            const users = await User.find().populate('hobbies').exec()
            return {
                payload: {
                    users: users
                }
            };
        } catch (e) {
            return Boom.boomify(e);
        }
    }

    public async delete(request: IExtendedRequest) {
        try {
            const user = await User.findById(request.params.userId).populate('hobbies').exec();

            //delete associated hobbies
            user.hobbies.forEach(async (hobby: any) => {
                hobby.delete();
            });
            user.delete();
            return {
                message: "User Deleted Successfully!"
            };
        } catch (e) {
            return Boom.boomify(e);
        }
    }

    public async getSingle(request: IExtendedRequest) {
        try {
            const user = await User.findById(request.params.userId).populate('hobbies').exec();

            return {
                payload: {
                    user: user
                }
            };
        }catch(e) {
            return Boom.boomify(e);
        }
    }
}