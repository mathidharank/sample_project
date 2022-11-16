import sampleData from '../../db/sampleData.json'
import {currencyDetails} from "../../models/countryDetailsModels";

export default class CurrencyControllers {
    constructor() {
    }

    public async getAllCurrencyList() {
        const CurrencyList: currencyDetails[] = sampleData.map(currencyData => {
            return currencyData.currency;
        });
        return CurrencyList;
    }

    public async getCurrencyListByName(searchInput: string) {
        return sampleData.filter(currencyData => {
            return currencyData.currency.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    }
}
