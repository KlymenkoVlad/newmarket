const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://dull-red-bat-slip.cyclic.app/";

module.exports = baseUrl;
