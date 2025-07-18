# Realtime Chat Application

A full-stack realtime chat application built with Node.js, Express, Socket.io, React, and MongoDB.

## Features

- Real-time messaging (Socket.io)
- Private and group chats (multiple rooms/channels)
- User authentication (Firebase Auth & JWT)
- Typing indicators
- Message reactions
- File sharing
- Notifications (in-app, user join/leave, new messages)
- Online/offline status tracking
- Responsive design (works on desktop & mobile)
- Message search and pagination (optional/advanced)
- Reconnection logic for socket reliability

## Technologies

- **Backend**: Node.js, Express, Socket.io, MongoDB, Firebase Admin SDK
- **Frontend**: React, Context API, Vite, Tailwind CSS
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: Firebase Auth, JWT
- **Styling**: Tailwind CSS, CSS Modules
- **Other**: dotenv, cors, lucide-react (icons)

## Folder Structure

```
.
├── client/   # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── socket/
│   │   └── utils/
│   ├── public/
│   └── ...
├── server/   # Node.js backend
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── sockets/
│   └── uploads/
└── ...
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd week-5-web-sockets-assignment-Kesa1203
   ```

2. **Install dependencies for both server and client**
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` in both `server/` and `client/` directories and fill in required values (MongoDB URI, Firebase keys, etc).
   - Place your Firebase service account JSON as `server/config/serviceAccountKey.json`.

4. **Start the development servers**
   ```bash
   # In the server directory
   npm run dev

   # In the client directory (in a new terminal)
   npm run dev
   ```

5. **Access the app**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API/Socket: [http://localhost:5000](http://localhost:5000)

## Usage

- Register a new user or login with existing credentials.
- Join a chat room or create a private chat.
- Send messages, see typing indicators, and receive notifications in real time.
- View online users and their statuses.

## API Endpoints

- `POST /auth/login` — User login
- `POST /auth/register` — User registration
- `POST /chat/send` — Send a chat message (requires authentication)
- WebSocket events: `join`, `sendMessage`, `newMessage`, `typing`, `userJoined`, `userLeft`, etc.

## Environment Variables

**Server (.env):**
```
MONGO_URI=your_mongodb_connection_string
FIREBASE_PROJECT_ID=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_PRIVATE_KEY=...
```

**Client (.env):**
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_SERVER_URL=http://localhost:5000
```

## Screenshots



## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

- **Name:** Sylvester L Kesa
- **GitHub:** [Kesa1203](https://github.com/Kesa1203)
- **Email:** kesasylvesterlee@gmail.com

---