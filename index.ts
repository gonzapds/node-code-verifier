import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Configuration of the .env file
dotenv.config();

// Create Express APP

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first APP route

app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('welcome to the API restful: Express + TS + swagger');
});

// Define the second APP route

app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET route: Hello World');
});

// Execute App

app.listen(port, () => {
    console.log(`Express App: running at http://localhost:${port}`)
});
