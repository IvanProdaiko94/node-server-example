const logger = require('koa-logger');

module.exports = {
    createApp: (
        app,
        router,
        ...routes
    ) => {
        routes.forEach(
            routes => routes.forEach(
                handler => router[handler.method](...handler.args)
            )
        );
        app.use(logger());
        app.use(router.routes());
        return app
    },
};
