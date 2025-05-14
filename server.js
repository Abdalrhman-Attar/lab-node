import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoutes from './routes/products.js';
import homeRoutes from './routes/home.js';
import notFoundRoutes from './routes/not_found.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/", homeRoutes);
app.use(notFoundRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));