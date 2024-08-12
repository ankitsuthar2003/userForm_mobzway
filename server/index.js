const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 4000;

// Connect to the database
database.connect();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors({
    origin: "*",
    credentials: true,
}));

// Routes
app.use('/api/users', userRoutes);

// Default route
// app.get("/", (req, res) => {
//     return res.json({
//         success: true,
//         message: 'Your server is up and running....'
//     });
// });
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
