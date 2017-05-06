const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const initializeDatabase = require('./db');
const API = require('./api');
const createLogger = require('./helpers/logger');

const { port, staticPath, isProduction, version } = config;
const server = express();
const log = createLogger(version, 'info');
const error = createLogger(version, 'error');


log('--------------------------------------------------------');
server.use(express.static(staticPath));
log(`Use static from ${staticPath}`);
server.use(morgan(isProduction ? 'combined' : 'tiny'));
log(`Running in ${isProduction ? 'PRODUCTION' : 'DEV'} mode with ${isProduction ? 'tiny' : 'combined'} logs`);
server.use(bodyParser.json());

initializeDatabase()
    .then((db) => {
        log(`initializeDatabase(): success`);
        // handle every other route with index.html, which will contain
        // a script tag to your application's JavaScript file(s). [REACT-ROUTER]
        //initialize main REST API
        server.use('/api', API({ db, config }));
        server.listen(port, () => {
            log(`Server was started on port ${port}`);
            log('--------------------------------------------------------');
        });
        server.get('*', (req, res) => res.sendFile(`${staticPath}/index.html`));
    })
    .catch((err) => {
        error(`Server initialization failed: ${err}`);
    });
