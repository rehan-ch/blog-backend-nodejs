import User from '../models/User.js';
import { successResponse } from '../utils/response.js';

export const getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        successResponse(res, users)
    }catch (error) {
        next(error);
    }
}