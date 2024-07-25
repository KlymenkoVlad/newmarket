export const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://newmarket.onrender.com";

export const frontendUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://newmarket-shop.vercel.app";
