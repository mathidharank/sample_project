import {Request, Response, Router} from 'express';
import {countryList} from "../../models/countryDetailsModels";
import CountryControllers from "../../controllers/countryControllers/countryControllers";
import PaginationService from "../../core/paginationService";

const CountryRouter = Router();

/** Get All Country List or Add pageNumber & pageSize */
CountryRouter.get('/', (request: Request, response: Response) => {
    const pageSize = request.query.pageSize ? Number(request.query.pageSize) : 0;
    const pageNumber = request.query.pageNumber ? Number(request.query.pageNumber) : 0;

    const handler = new CountryControllers(new PaginationService());
    return handler.getCountryList(pageSize, pageNumber).then((result: countryList[]) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

/** Get a country list based on search input  */
CountryRouter.get('/getCountryByName/:countryName', (request: Request, response: Response) => {
    const params = request.params.countryName;
    const handler = new CountryControllers(new PaginationService());
    return handler.getCountryListByName(params).then((result: countryList[]) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

/** Add new Country */
CountryRouter.post('/addCountry', (request: Request, response: Response) => {
    const handler = new CountryControllers(new PaginationService());
    return handler.addCountry(request.body).then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

/** Update Country by Code */
CountryRouter.put('/addCountry/:code', (request: Request, response: Response) => {
    const countryCode = request.params.code;
    const handler = new CountryControllers(new PaginationService());
    return handler.updateCountry(request.body, countryCode).then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

/** Delete Country by Code */
CountryRouter.delete('/addCountry/:code', (request: Request, response: Response) => {
    const countryCode = request.params.code;
    const handler = new CountryControllers(new PaginationService());
    return handler.deleteCountry(request.body, countryCode).then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});


export { CountryRouter }
