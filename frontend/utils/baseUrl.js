const baseUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://P";

module.exports = baseUrl;
