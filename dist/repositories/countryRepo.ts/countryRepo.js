"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepo = void 0;
const express_1 = __importDefault(require("express"));
const countryDatabaseCommunicator_1 = __importDefault(require("../../controllers/countryDatabaseCommunicator/countryDatabaseCommunicator"));
const CountryRepo = express_1.default.Router();
exports.CountryRepo = CountryRepo;
CountryRepo.get('/', (request, response) => {
    const handler = new countryDatabaseCommunicator_1.default();
    return handler.getCountryList().then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=countryRepo.js.map