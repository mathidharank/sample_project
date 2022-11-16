import {Request, Response, Router} from 'express';
import CurrencyControllers from "../../controllers/currencyControllers/currencyControllers";
import {countryList, currencyDetails} from "../../models/countryDetailsModels";

const CurrencyRouter = Router();

CurrencyRouter.get('/', (request: Request, response: Response) => {
    const handler = new CurrencyControllers();
    return handler.getAllCurrencyList().then((result: currencyDetails[]) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

CurrencyRouter.get('/getCurrencyByName/:currencyName', (request: Request, response: Response) => {
    const params = request.params.currencyName; // params = {currencyName:"Dollar"}
    console.log(params)
    const handler = new CurrencyControllers();
    return handler.getCurrencyListByName(params).then((result: countryList[]) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

export {CurrencyRouter}
