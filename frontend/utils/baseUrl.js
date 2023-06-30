const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : process.env.NODE_ENV;

module.exports = baseUrl;
