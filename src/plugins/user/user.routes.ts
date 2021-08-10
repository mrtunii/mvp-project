import Joi from "joi";
import User from "../../models/user.model";
import UserController from "./user.controller";
import { createUserValidator } from "./user.validation";

const userController = new UserController();

const userRoutes = [
    {
        method: 'POST',
        path: '/users',
        handler: userController.create,
        options: {
            validate: createUserValidator,
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
                params: Joi.object({
                    "userId": Joi.string().required()
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
                params: Joi.object({
                    "userId": Joi.string().required()
                })
            },
            tags: ['api'],
            description: 'Get User with hobbies By ID'
        }
    }
];

export default userRoutes;