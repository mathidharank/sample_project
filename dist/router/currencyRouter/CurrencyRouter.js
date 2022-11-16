"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRouter = void 0;
const express_1 = require("express");
const currencyControllers_1 = __importDefault(require("../../controllers/currencyControllers/currencyControllers"));
const CurrencyRouter = (0, express_1.Router)();
exports.CurrencyRouter = CurrencyRouter;
CurrencyRouter.get('/', (request, response) => {
    const handler = new currencyControllers_1.default();
    return handler.getAllCurrencyList().then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
CurrencyRouter.get('/getCurrencyByName/:currencyName', (request, response) => {
    const params = request.params.currencyName; // params = {currencyName:"Dollar"}
    console.log(params);
    const handler = new currencyControllers_1.default();
    return handler.getCurrencyListByName(params).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=CurrencyRouter.js.map