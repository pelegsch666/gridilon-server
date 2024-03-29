"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(+PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
