// Import required packages
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Initialize the app and load environment variables from .env
dotenv.config({ path: path.resolve(__dirname, ".env") });
const app = express();

// Enable CORS for all routes
app.use(cors());

const BASE_URL = "https://api.1inch.dev/history/v2.0/history";

// Endpoint to fetch wallet transaction history
app.get("/api/:address/history", async (req, res) => {
  const address = req.params.address;
  const limit = req.query.limit || 10;

  try {
    const constructedUrl = `${BASE_URL}/${address}/events?chainId=${1}&limit=${limit}`;

    const response = await axios.get(constructedUrl, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`, // Use API key from .env
      },
    });

    // Send the response data back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching wallet transactions:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});