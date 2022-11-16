import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import {CountryRouter, CurrencyRouter} from "./router";

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use("*", cors());

server.all("/*", (req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});

/** All service Router */
server.use('/country', CountryRouter);
server.use('/currency', CurrencyRouter);

const port = process.env.PORT || 3001;

module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
