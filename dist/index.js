"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration of the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first APP route
app.get('/', (req, res) => {
    // Send Hello World
    res.send('welcome to the API restful: Express + TS + swagger');
});
// Define the second APP route
app.get('/hello', (req, res) => {
    // Send Hello World
    res.send('Welcome to GET route: Hello World');
});
// Execute App
app.listen(port, () => {
    console.log(`Express App: running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map