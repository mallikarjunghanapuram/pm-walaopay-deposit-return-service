"use strict";

const txAdapter = process.env.TX_ADAPTER_URL;
const env = process.env.NODE_ENV || "development";
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || 1616;
const name = process.env.APP_NAME || "pm-walaopay-deposit-return-service";
const logLevel = process.env.LOG_LEVEL;
const variables = {
    txAdapter,
    env,
    host,
    port,
    name,
    logLevel
};

module.exports = variables;

