"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sampleData_json_1 = __importDefault(require("../../sampleData.json"));
class CurrencyHandler {
    constructor() {
    }
    getAllCurrencyList() {
        return __awaiter(this, void 0, void 0, function* () {
            const CurrencyList = sampleData_json_1.default.map(currencyData => currencyData.currency);
            return CurrencyList;
            // return await this.membersDatabaseCommunicator.getAllMembers();
        });
    }
    getCurrencyListByName(searchInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return sampleData_json_1.default.filter(currencyData => {
                return currencyData.currency.name.toLowerCase().includes(searchInput.toLowerCase());
            });
        });
    }
}
exports.default = CurrencyHandler;
//# sourceMappingURL=currencyControllers.js.map
