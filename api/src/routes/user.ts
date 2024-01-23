import {Router} from 'express';
import * as userController from '../controllers/userController'

export const userHandlerRouter = Router();


//Needed to get 1 user - we will do based on email, since email is unique
//Needed to get user based on chat - TODO: at last
//Needed to create a user
//Remove a user
//Update the details of the user
userHandlerRouter.get('/:email', userController.getUserData);