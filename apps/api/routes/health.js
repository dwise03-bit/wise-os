module.exports = (app) => {
    app.get("/health", (req, res) => {
        res.json({
            status: "healthy",
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        });
    });
};
