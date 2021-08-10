import Joi from "joi";
import HobbyController from "./hobby.controller";
import { createHobbyValidator } from "./hobby.validation";

const hobbyController = new HobbyController();

const userRoutes = [
    {
        method: 'POST',
        path: '/users/{userId}/hobbies',
        handler: hobbyController.create,
        options: {
            validate: createHobbyValidator,
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
                params: Joi.object({
                    "userId": Joi.string().required()
                })
            },
            tags: ['api'],
            description: 'Delete hobby'
        }
    }
];

export default userRoutes;