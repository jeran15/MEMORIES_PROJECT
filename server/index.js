import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

// Middleware for parsing request bodies
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB connection string and server port
const CONNECTION_URL =
  "mongodb+srv://javascriptdb:javascriptdb123@cluster0.0pik28s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(CONNECTION_URL) // Options are no longer required
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log("Connection error:", error.message));

// Optional Mongoose settings (depending on your use case)
mongoose.set("strictQuery", true);
