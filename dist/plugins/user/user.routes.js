"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const user_controller_1 = __importDefault(require("./user.controller"));
const user_validation_1 = require("./user.validation");
const userController = new user_controller_1.default();
const userRoutes = [
    {
        method: 'POST',
        path: '/users',
        handler: userController.create,
        options: {
            validate: user_validation_1.createUserValidator,
            tags: ['api'],
            description: 'Create User'
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: userController.getAll,
        options: {
            tags: ['api'],
            description: 'Get all users with hobbies'
        }
    },
    {
        method: 'DELETE',
        path: '/users/{userId}',
        handler: userController.delete,
        options: {
            validate: {
                params: joi_1.default.object({
                    "userId": joi_1.default.string().required()
                })
            },
            tags: ['api'],
            description: 'Delete User'
        }
    },
    {
        method: 'GET',
        path: '/users/{userId}',
        handler: userController.getSingle,
        options: {
            validate: {
                params: joi_1.default.object({
                    "userId": joi_1.default.string().required()
                })
            },
            tags: ['api'],
            description: 'Get User with hobbies By ID'
        }
    }
];
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map