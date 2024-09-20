import User from '../models/User.js';
import { successResponse } from '../utils/response.js';
import { validateObjectId } from '../utils/validate.js';
import ErrorResponse from '../utils/errorHandler.js';

export const getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        successResponse(res, users)
    }catch (error) {
        next(error);
    }
}

export const getUserById = async(req, res) => {
    const { id } = req.params;
    try{
        validateObjectId(id, 'User');
        const user = await User.findById(id);
        if(!user){
            next(new ErrorResponse('User not Found', 404));
        }
        successResponse(res, user)
    }
    catch(error){
        next(error)
    }
}

export const createUser = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try{
        const newUser = new User({ firstName, lastName, email, password })
        const savedUser = await newUser.save();
        successResponse(res, savedUser, 'User Saved Successfully!!!', 201)
    }
    catch(error){
        next(error)
    }
}

export const updateUserById = async(req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    try{
        validateObjectId(id, 'User');

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { firstName, lastName, email, password },
            {new: true, runValidators: true}
        )
        if(!updatedUser) return next(new ErrorResponse('User not found!!!'))

        successResponse(res, updatedUser, 'User updated Successfully!!!', 201)
    }
    catch(error){
        next(error)
    }
}

export const deleteUserById = async(req, res) => {
    const { id } = req.params;
    try{
        validateObjectId(id, 'User');
        const user = await User.findByIdAndDelete(id);
        if(!user){
            next(new ErrorResponse('User not Found', 404));
        }
        successResponse(res, user, "User Deleted Successfully!!!")
    }
    catch(error){
        next(error)
    }
}