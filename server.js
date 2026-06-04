const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://resume-sandy-alpha.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Portfolio API</h1>`);
});

app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});