const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://newmarket-backend.onrender.com";

module.exports = baseUrl;
