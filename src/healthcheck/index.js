module.exports = [
    {
        method: 'get',
        args: [
            ['/', '/ready'],
            (ctx) => {
                ctx.status = 200;
            }
        ]
    }
];
