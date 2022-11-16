"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRouter = void 0;
const express_1 = require("express");
const countryControllers_1 = __importDefault(require("../../controllers/countryControllers/countryControllers"));
const paginationService_1 = __importDefault(require("../../core/paginationService"));
const CountryRouter = (0, express_1.Router)();
exports.CountryRouter = CountryRouter;
CountryRouter.get('/', (request, response) => {
    console.log('***', request.query);
    const pageSize = request.query.pageSize ? Number(request.query.pageSize) : 0;
    const pageNumber = request.query.pageNumber ? Number(request.query.pageNumber) : 0;
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.getCountryList(pageSize, pageNumber).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
CountryRouter.get('/getCountryByName/:countryName', (request, response) => {
    const params = request.params.countryName; // params = {countryName:"Mexico"}
    console.log(params);
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.getCountryListByName(params).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=CountryRouter.js.map