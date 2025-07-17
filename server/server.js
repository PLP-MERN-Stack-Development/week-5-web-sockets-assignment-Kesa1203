import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv'; // ✅ Added dotenv to load environment variables
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import { setupSocket } from './socket/socketHandlers.js';

dotenv.config(); // ✅ Load environment variables from .env file

const app = express();
const server = http.createServer(app);

const allowedOrigins = ['http://localhost:5173'];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// ✅ Use environment variable for MongoDB URI
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

setupSocket(io);

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
