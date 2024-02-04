const express = require('express');
const cors = require("cors");
const app = express();
const https = require('https');

// Global setup

const port = 4200;
app.use(cors());

const quotableOptions = {
    user: process.env.QUOTABLE_USER,
    key: process.env.QUOTABLE_API_KEY
};

// Routing

app.get('/quote', (req, res) => {
    https.get("https://api.quotable.io/quotes/random", /*quotableOptions, */ (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const jsonData = JSON.parse(data)[0];
            let author = jsonData["author"];
            let content = jsonData["content"];

            res.json({ "author": author, "content": content })
        });
    }).on('error', (e) => {
        console.error(e);
    });
})


app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
});