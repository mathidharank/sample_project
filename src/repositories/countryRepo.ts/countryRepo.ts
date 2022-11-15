import express from 'express';
import CountryDatabaseCommunicator from '../../controllers/countryDatabaseCommunicator/countryDatabaseCommunicator';

const CountryRepo = express.Router();

CountryRepo.get('/', (request: any, response: any) => {
    const handler = new CountryDatabaseCommunicator();
    return handler.getCountryList().then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

export { CountryRepo }