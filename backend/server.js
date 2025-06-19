import { configDotenv } from 'dotenv';
configDotenv(); // ✅ Load .env before anything else

import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
app.use([cors(), express.json()]);

connectDB();


// Routes
app.get('/', (req, res) => res.send("API is working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on:", PORT);
});
