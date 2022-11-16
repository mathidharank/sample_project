"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const server = (0, express_1.default)();
/** Service Router */
server.use('/country', router_1.CountryRouter);
server.use('/currency', router_1.CurrencyRouter);
const port = process.env.PORT || 3000;
module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map