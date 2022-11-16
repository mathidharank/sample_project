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
/** Get All Country List or Add pageNumber & pageSize */
CountryRouter.get('/', (request, response) => {
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
/** Get a country list based on search input  */
CountryRouter.get('/getCountryByName/:countryName', (request, response) => {
    const countryName = request.params.countryName;
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.getCountryListByName(countryName).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
/** Add new Country */
CountryRouter.post('/addCountry', (request, response) => {
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.addCountry(request.body).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
/** Update Country by Code */
CountryRouter.put('/addCountry/:code', (request, response) => {
    const countryCode = request.params.code;
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.updateCountry(request.body, countryCode).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
/** Delete Country by Code */
CountryRouter.delete('/addCountry/:code', (request, response) => {
    const countryCode = request.params.code;
    const handler = new countryControllers_1.default(new paginationService_1.default());
    return handler.deleteCountry(request.body, countryCode).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=CountryRouter.js.map