"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const hobby_controller_1 = __importDefault(require("./hobby.controller"));
const hobby_validation_1 = require("./hobby.validation");
const hobbyController = new hobby_controller_1.default();
const userRoutes = [
    {
        method: 'POST',
        path: '/users/{userId}/hobbies',
        handler: hobbyController.create,
        options: {
            validate: hobby_validation_1.createHobbyValidator,
            tags: ['api'],
            description: 'Create hobby for user'
        }
    },
    {
        method: 'DELETE',
        path: '/users/{userId}/hobbies',
        handler: hobbyController.delete,
        options: {
            validate: {
                params: joi_1.default.object({
                    "userId": joi_1.default.string().required()
                })
            },
            tags: ['api'],
            description: 'Delete hobby'
        }
    }
];
exports.default = userRoutes;
//# sourceMappingURL=hobby.routes.js.map