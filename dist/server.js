"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./router");
const server = (0, express_1.default)();
server.use(body_parser_1.default.urlencoded({ extended: false }));
server.use(body_parser_1.default.json());
server.use("*", (0, cors_1.default)());
server.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});
server.get('/', (request, response) => {
    response.status(200).send('hello world');
});
server.use('/country', router_1.CountryRouter);
server.use('/currency', router_1.CurrencyRouter);
const port = process.env.PORT || 3001;
module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map