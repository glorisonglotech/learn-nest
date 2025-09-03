require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const userRoutes = require('./routes/userRoute');
const courseRoutes = require('./routes/courseRoute');
const moduleRoutes = require('./routes/moduleRoute');
const quizRoutes = require('./routes/quizRoute');
const progressRoutes = require('./routes/progressRoute');
const authRoutes = require('./routes/authRoute');


const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');

const app = express();


app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/auth', authRoutes);


app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
  console.log(`Server running on port http://localhost:${PORT}`);
});
