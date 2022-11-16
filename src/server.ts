import express from 'express';
import {CountryRouter, CurrencyRouter} from "./router";

const server = express();

/** Service Router */
server.use('/country', CountryRouter);
server.use('/currency', CurrencyRouter);

const port = process.env.PORT || 3000;

module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
