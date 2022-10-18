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
    res.json({"data":{"message":`Hola, ${req.params.name}`}});
});

app.get('/goodbye', (req, res)=>{
    res.status(200)
    res.json({"data":{"message":"Goodbye World!"}})
})
// Execute App

app.listen(port, () => {
    console.log(`Express App: running at http://localhost:${port}`)
});
