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
            try {
                const jsonData = JSON.parse(data)[0];
                let author = jsonData.author;
                let content = jsonData.content;
                if (author && content) {
                    res.status(200).json({ author, content });
                } else {
                    console.error('Missing author or content fields in API response.');
                    res.status(500).json({ error: 'Invalid Data from API' });
                }
            } catch {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }).on('error', (e) => {
        res.status(500).json({ error: 'Internal Server Error' });
    });
})


app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
});