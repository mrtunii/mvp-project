"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("boom"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const hobby_model_1 = __importDefault(require("../../models/hobby.model"));
class HobbyController {
    constructor() { }
    async create(request) {
        try {
            const payload = request.payload;
            const newHobby = new hobby_model_1.default({
                name: payload.name,
                passionLevel: payload.passionLevel,
                year: payload.year
            });
            const savedHobby = await newHobby.save();
            const user = await user_model_1.default.findById(request.params.userId).populate('hobbies').exec();
            user.hobbies.push(savedHobby);
            user.save();
            return {
                message: `Successfully created new hobby: ${savedHobby.name}`,
                payload: { user: user }
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
    async delete(request) {
        try {
            const payload = request.payload;
            const params = request.params;
            //remove hobby from user
            await user_model_1.default.findByIdAndUpdate(params.userId, {
                $pull: { hobbies: payload.hobbyId }
            });
            //delete hobby
            await hobby_model_1.default.findByIdAndDelete(payload.hobbyId);
            return {
                message: `Successfully deleted hobby`
            };
        }
        catch (e) {
            return boom_1.default.boomify(e);
        }
    }
}
exports.default = HobbyController;
//# sourceMappingURL=hobby.controller.js.map