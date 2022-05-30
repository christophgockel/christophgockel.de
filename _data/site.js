module.exports = {
    url: process.env.ELEVENTY_ENV === "production" ? "https://christophgockel.de": "http://localhost:3000",
    isProduction: process.env.ELEVENTY_ENV === "production"
};
