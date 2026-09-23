export const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";
// export const BaseURL = "https://localhost:7104";
export const BaseURL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:7104"
    : "https://portfolio-backend-yfqp.onrender.com";
