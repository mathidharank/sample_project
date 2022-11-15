"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountryService {
    constructor() { }
    getAllCountryDetails() {
        axios.get('/user?ID=12345')
            .then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
}
exports.default = CountryService;
//# sourceMappingURL=counterService.js.map