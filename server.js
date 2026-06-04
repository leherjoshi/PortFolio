const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const defaultAllowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://resume-sandy-alpha.vercel.app",
  "*"
];

const envAllowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean)
  : [];

const allowedOrigins = Array.from(new Set([
  ...defaultAllowedOrigins,
  ...envAllowedOrigins,
]));

console.log('Allowed CORS origins:', allowedOrigins);

app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS origin:', origin);
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

// note: explicit app.options("*", cors()) caused a path parsing crash on some setups;
// preflight is handled by the cors middleware above.

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Portfolio API</h1>`);
});

app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});