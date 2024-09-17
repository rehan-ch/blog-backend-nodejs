import mongoose from 'mongoose';
import ErrorResponse from './errorHandler.js';

export const validateObjectId = (id, resourceName = 'Resource') => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ErrorResponse(`${resourceName} ID format is invalid`, 400);
  }
};
