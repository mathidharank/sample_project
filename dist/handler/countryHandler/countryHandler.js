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
class CountryHandler {
    constructor(paginationService) {
        this.paginationService = paginationService;
    }
    getCountryList(pageSize, pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('pageSize', pageSize);
            console.log('pageNumber', pageNumber);
            if (pageSize > 0 && pageNumber > 0) {
                console.log('yessss');
                return this.paginationService.page(sampleData_json_1.default, pageSize, pageNumber);
            }
            else {
                console.log('Noooo');
                return sampleData_json_1.default;
            }
            // return pageSize && pageNumber ? this.paginationService.page(sampleData, pageSize, pageNumber) : sampleData;
        });
    }
    getCountryListByName(searchInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return sampleData_json_1.default.filter(countryData => {
                return countryData.name.toLowerCase().includes(searchInput.toLowerCase());
            });
        });
    }
}
exports.default = CountryHandler;
//# sourceMappingURL=countryControllers.js.map
