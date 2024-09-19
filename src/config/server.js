// server.js
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import articleRoutes from '../routes/articleRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import errorHandler from '../middleware/errorHandler.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);
export const startServer = () => {
    const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set
    const server = createServer(app);

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
};
