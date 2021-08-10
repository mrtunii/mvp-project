"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("boom"));
const user_model_1 = __importDefault(require("../../models/user.model"));
class UserController {
    constructor() { }
    async create(request) {
        try {
            const payload = request.payload;
            const newUser = new user_model_1.default({ name: payload.name });
            const savedUser = await newUser.save();
            return {
                message: `Successfully created new user: ${savedUser.name}`,
                payload: { user: savedUser }
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
    async getAll(request) {
        try {
            const users = await user_model_1.default.find().populate('hobbies').exec();
            return {
                payload: {
                    users: users
                }
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
    async delete(request) {
        try {
            const user = await user_model_1.default.findById(request.params.userId).populate('hobbies').exec();
            //delete associated hobbies
            user.hobbies.forEach(async (hobby) => {
                hobby.delete();
            });
            user.delete();
            return {
                message: "User Deleted Successfully!"
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
    async getSingle(request) {
        try {
            const user = await user_model_1.default.findById(request.params.userId).populate('hobbies').exec();
            return {
                payload: {
                    user: user
                }
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map