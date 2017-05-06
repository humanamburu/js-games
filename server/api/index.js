const { Router } = require('express');
const level = require('./level');

module.exports = (configuration) => {
    const router = Router();
    const { version } = configuration.config;

    router.get('/', (req, res) => res.json({ version }));
    router.use('/level', level(configuration));

    return router;
};
