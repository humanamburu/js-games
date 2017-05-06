const { Router } = require('express');

const tasks = [
    {
        name: 'Easy arithmetic',
        description: 'Perform math operation for array',
        data: '[1, 2, 3, 4, 5]',
    },
    {
        name: 'Plane object',
        description: 'Create a plane Object with required fields',
        data: '[1, 2, 3, 4, 5]',
    },
    {
        name: 'Odds array',
        description: 'Generate ods array',
        data: '[1, 2, 3, 4, 5]',
    },
    {
        name: 'Odds generator',
        description: 'Create a special odd-generator function',
        data: '[1, 2, 3, 4, 5]',
    },
];

const level = {
    name: 'Tutorial',
    tags: ['Basics', 'Math', 'Objects', 'Console', 'API', 'Tutorial'],
    tips: ['Press the F12 on your keyboard to open the dev tools and start hacking!', 'Use devtools console for experiments'],
    tasks: tasks,
};

module.exports = () => {
    const router = Router();

    router.get('/', (req, res) => res.json(level));

    router.post('/answer', (req, res) => {
        if (req.body.answer === 15) {
            return res.sendStatus(200);
        }

        return res.sendStatus(400);
    });

    router.use('/:id', (req, res) => {
        const obj = Object.assign({ id: req.params.id }, level);

        res.json(obj);
    });

    return router;
};
