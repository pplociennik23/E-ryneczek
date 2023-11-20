import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.E_RYNECZEK_BACKEND_PORT;
mongoose.connect(process.env.E_RYNECZEK_CONNECTION_URL)
                .then(() => app.listen(PORT, () => console.log(`Sever running on port ${PORT}`)))
                .catch((error) => console.log(error.message));