const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        name: "Wise OS",
        version: "0.1.0",
        status: "online"
    });
});

require("./routes/health")(app);
require("./routes/system")(app);

app.listen(PORT, () => {
    console.log("=================================");
    console.log("      WISE OS");
    console.log("=================================");
    console.log("API running on port", PORT);
});
