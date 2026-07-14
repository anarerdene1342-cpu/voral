const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


// Allow JSON data
app.use(express.json());


// Serve your website files
app.use(express.static("."));


// Test route
app.get("/api/status", (req, res) => {

    res.json({
        project: "VORAL",
        status: "online",
        server: "Railway"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(
        `VORAL server running on port ${PORT}`
    );

});