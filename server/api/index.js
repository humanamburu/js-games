const { Router } = require('express');
const level = require('./level');

module.exports = ({ version }) => {
    const router = Router();

    router.get('/', (req, res) => res.json({ version }));
    router.use('/level', level());

    return router;
};
