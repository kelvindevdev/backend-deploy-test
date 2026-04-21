/* Backend
    1. Install framework 
        a. npm init
        b. npm install express
    2. Run server (node server.js)
    3. Create simple endpoint
    4. Build API (no DB)
    5. Add database
    6. Refactor structure
    7. Add auth and advance stuff
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT} `)
});