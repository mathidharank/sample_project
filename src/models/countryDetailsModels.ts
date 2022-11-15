export interface countryList {
    name: string;
    code: string;
    capital: string;
    region: string;
    currency: currencyDetails;
    language: languageDetails;
    flag: string;
    dialling_code: string;
    isoCode: string;
}

export interface currencyDetails {
    code: string;
    name: string;
    symbol: string;
}

export interface languageDetails {
    code: string;
    name: string;
}