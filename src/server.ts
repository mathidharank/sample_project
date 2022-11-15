import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import { membersRouter } from './repositories/membersEndpoint/membersEndpoint';

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

server.get('/', (request: any, response: any) => {
    response.status(200).send('hello world');
});

server.use('/member', membersRouter);
server.use('/countryList', membersRouter);
server.use('/currencyList', membersRouter);

const port = process.env.PORT || 3000;

module.exports = server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});