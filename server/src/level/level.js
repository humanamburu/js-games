const tasks = [
    {
        name: 'Easy arithmetic',
        description: 'Perform math operation for array',
        data: '[1, 2, 3, 4, 5]',
        check: 'function(x) { return x === 15; }'
    },
    {
        name: 'Plane object',
        description: 'Create a plane Object with required fields',
        data: '[1, 2, 3, 4, 5]',
        check: 'function(x) { return x === 15; }'
    },
    {
        name: 'Odds array',
        description: 'Generate ods array',
        data: '[1, 2, 3, 4, 5]',
        check: 'function(x) { return x === 15; }'
    },
    {
        name: 'Odds generator',
        description: 'Create a special odd-generator function',
        data: '[1, 2, 3, 4, 5]',
        check: 'function(x) { return x === 15; }'
    },
];

const level = {
    name: 'Tutorial',
    tags: ['Basics','Math','Objects','Console','API','Tutorial'],
    tips: ['Press the F12 on your keyboard to open the dev tools and start hacking!', 'Use devtools console for experiments'],
    tasks: tasks,
};

module.exports = (req, res) => {
    res.status(200).send(level);
};
