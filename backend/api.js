const express = require('express');
const cors = require("cors");
const app = express();
const https = require('https');

// Global setup
const port = 3000
app.use(cors())

// Routing

app.get('/quote', (req, res) => {
    return { "content": "Never gonna give you up", "author": "Rick Astley" }
})

app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
})