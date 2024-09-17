// index.js
import { startServer } from './config/server.js';
import { connectDb } from './config/db.js';

const startApp = async () => {
    try {
        await connectDb();
        startServer();
    } catch (e) {
        console.error('Failed to start the application', e);
        process.exit(1); // Exit the process if unable to start the app
    }
};

startApp();
