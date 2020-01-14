"use strict";

const errorResponseHandler = require('../utilities/pc-helpers/errorResponseHandler');
const transactionsModel = require("../models/transactions");

exports.walaopayRedirect = async function (ctx) {
    try {
        const {
            service_version,
            sign,
            billno,
            partner_orderid,
            currency,
            amount,
            status
        } = ctx.request.body;
        let transactionStatus;
        switch (status) {
            case "000":
                transactionStatus = "SUCCESS";
                break;
            case "111":
                transactionStatus = "FAIL";
                break;
            case "001":
                transactionStatus = "PENDING";
                break;
            default:
                transactionStatus = "PENDING";
        }
        const transaction = await transactionsModel.getVendorOrderById(partner_orderid);

        console.log(transaction);

        const responseData = {
            amount: transaction.amount,
            orderId: transaction.merchantOrderId,
            currency: transaction.currency,
            transactionStatus
        }
        const title = 'Redirecting...Please wait...';
        const actionURL = transaction.returnUrl;
        await ctx.render('redirectform', {
            title,
            actionURL,
            method: 'GET',
            returnData: responseData
        });
    } catch (error) {
        errorResponseHandler(ctx, error);
    }
};