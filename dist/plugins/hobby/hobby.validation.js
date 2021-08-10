"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("Joi"));
exports.createHobbyValidator = {
    payload: Joi.object({
        "name": Joi.string().required(),
        "passionLevel": Joi.string().required(),
        "year": Joi.number().required()
    }),
    params: Joi.object({
        "userId": Joi.string().required()
    })
};
//# sourceMappingURL=hobby.validation.js.map