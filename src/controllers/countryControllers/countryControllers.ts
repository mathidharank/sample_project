import sampleData from '../../db/sampleData.json'
import PaginationService from "../../core/paginationService";

export default class CountryControllers {

    constructor(private paginationService: PaginationService) {
    }

    public async getCountryList(pageSize: number, pageNumber: number) {
        if (pageSize > 0 && pageNumber > 0) {
            return this.paginationService.page(sampleData, pageSize, pageNumber);
        } else {
            return sampleData;
        }
    }

    public async getCountryListByName(searchInput: string) {
        return sampleData.filter(countryData => {
            return countryData.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    }

    public async addCountry(data: any) {
        // Add logic for addCountry
    }

    public async updateCountry(data: any, countryCode: string) {
        // Add logic for updateCountry
    }

    public async deleteCountry(data: any, countryCode: string) {
        // Add logic for deleteCountry
    }
}
