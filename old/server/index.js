const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const staticPath = path.resolve('client/dist/');

app.use(express.static(staticPath));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s). [REACT-ROUTER]
app.get('*', function (request, response){
    response.sendFile(staticPath + '/index.html');
});

app.listen(port);
console.log("server started on port " + port);
