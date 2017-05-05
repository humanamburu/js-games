const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const staticPath = path.resolve(`${__dirname}/static/`);
const appStatic = express.static(staticPath);
app.use(appStatic);

const levelEndpoint = require('src/level/level');

app.get('/level', levelEndpoint);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s). [REACT-ROUTER]
app.get('*', (req, res) => {
    res.sendFile(`${staticPath}/index.html`);
});

app.listen(port, () => {
    console.log(`Server was started on port ${port}`);
});
