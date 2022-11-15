"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersRouter = void 0;
const membersDatabaseCommunicator_1 = require("../../controllers/membersDatabaseCommunicator/membersDatabaseCommunicator");
const membersHandler_1 = require("../../handler/members-handler/membersHandler");
const express_1 = __importDefault(require("express"));
// const express = require('express');
const membersRouter = express_1.default.Router();
exports.membersRouter = membersRouter;
membersRouter.post('/', (request, response) => {
    const handler = new membersHandler_1.MembersHandler(new membersDatabaseCommunicator_1.MembersDatabaseCommunicator());
    return handler.register(request.body).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
membersRouter.get('/allMembers', (request, response) => {
    const handler = new membersHandler_1.MembersHandler(new membersDatabaseCommunicator_1.MembersDatabaseCommunicator());
    return handler.getAllMembers().then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
membersRouter.get('/getMember/:id', (request, response) => {
    const memberId = request.params.id;
    console.log(memberId);
    const handler = new membersHandler_1.MembersHandler(new membersDatabaseCommunicator_1.MembersDatabaseCommunicator());
    return handler.getMemberByID(memberId).then((result) => {
        response.status(200).send(result);
    }).catch((error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=membersEndpoint.js.map