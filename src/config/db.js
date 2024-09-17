// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDb = async () => {
    try {
        // Ensure MONGODB_URI is defined
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        // Connect to MongoDB with options
        await mongoose.connect(mongoUri);

        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error connecting to MongoDB', e);
        process.exit(1); // Exit the process if unable to connect
    }
};
