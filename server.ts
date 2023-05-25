import express from 'express';
import { config } from 'dotenv';

config();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(+PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
