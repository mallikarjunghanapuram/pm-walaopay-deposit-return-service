"use strict";

const Router = require("koa-router");

const router = new Router();
const healthController = require("./controllers/health");
const walaopayRedirectController = require("./controllers/walaopayRedirect");

router.get("/health", healthController.health);

router.post("/deposit/walaopay", walaopayRedirectController.walaopayRedirect);

module.exports = router;