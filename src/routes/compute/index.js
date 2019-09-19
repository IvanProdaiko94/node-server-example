const koaBody = require('koa-body');
const { subtractVecs } = require('../../utils/');

/*
Expected structure
{
    "timestamp": 1493758596,
    "data": [
        { "title": "Part 1", "values": [0, 3, 5, 6, 2, 9] },
        { "title": "Part 2", "values": [6, 3, 1, 3, 9, 4] }
    ]
}
 */


module.exports = [
    {
        method: 'post',
        args: [
            '/compute/:request_id',
            koaBody(),
            (ctx) => {
                const body = ctx.request.body;
                try {
                    const part1 = body.data[0].values;
                    const part2 = body.data[1].values;
                    ctx.body = {
                        request_id: ctx.params.request_id,
                        timestamp: body.timestamp,
                        result: {
                            title: "Result",
                            values: subtractVecs(part1, part2),
                        }
                    }
                } catch (e) {
                    ctx.response.status = 400;
                    ctx.body = e.message
                }
            }
        ]
    }
];
