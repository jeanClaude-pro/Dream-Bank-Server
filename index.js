// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');


const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;
app.use(cors());


// Middleware
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb+srv://jeanclaudesahani:SGqwGljHZ031tKXG@dreambank.nphgy.mongodb.net/?retryWrites=true&w=majority&appName=DreamBank", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
