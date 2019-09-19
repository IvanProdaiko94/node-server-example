const Koa = require('koa');
const router = require('koa-router');
const gracefulShutdown = require('http-graceful-shutdown');

const { createApp } = require('./src/app');
const healthcheck = require('./src/healthcheck');
const compute = require('./src/routes/compute');
const env = require('./src/env');


// start service
const service = createApp(new Koa(), router(), compute);
service.listen(env.servicePort, '0.0.0.0', () => {
    console.log('Service listening on %d', env.servicePort);
});

// start healthcheck service
const healthcheckService = createApp(new Koa(), router(), healthcheck);
healthcheckService.listen(env.healthcheckPort, '0.0.0.0', () => {
    console.log('Healthcheck service listening on %d', env.healthcheckPort);
});

// configure graceful shutdown
gracefulShutdown(
    service,
    {
        signals: 'SIGINT SIGTERM',
        timeout: 30000,
        onShutdown: () => new Promise((resolve) => {
            console.log('Healthcheck service gracefully shutted down.....');
            healthcheckService.close();
            resolve()
        }),
        finally: function() {
            console.log('Service gracefully shutted down.....')
        }
    }
);
