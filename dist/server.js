"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const membersEndpoint_1 = require("./repositories/membersEndpoint/membersEndpoint");
const server = express_1.default();
server.use(body_parser_1.default.urlencoded({ extended: false }));
server.use(body_parser_1.default.json());
server.use("*", cors_1.default());
server.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});
server.get('/', (request, response) => {
    response.status(200).send('hello world');
});
server.use('/member', membersEndpoint_1.membersRouter);
server.use('/countryList', membersEndpoint_1.membersRouter);
server.use('/currencyList', membersEndpoint_1.membersRouter);
const port = process.env.PORT || 3000;
module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map