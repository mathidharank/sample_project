import { MembersDatabaseCommunicator } from '../../controllers/membersDatabaseCommunicator/membersDatabaseCommunicator';
import { MembersHandler } from '../../handler/members-handler/membersHandler';
import express from 'express';

// const express = require('express');
const membersRouter = express.Router();

membersRouter.post('/', (request: any, response: any) => {
    const handler = new MembersHandler(new MembersDatabaseCommunicator());
    return handler.register(request.body).then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

membersRouter.get('/allMembers', (request: any, response: any) => {
    const handler = new MembersHandler(new MembersDatabaseCommunicator());
    return handler.getAllMembers().then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

membersRouter.get('/getMember/:id', (request: any, response: any) => {
    const memberId = request.params.id
    console.log(memberId);
    const handler = new MembersHandler(new MembersDatabaseCommunicator());
    return handler.getMemberByID(memberId).then((result: any) => {
        response.status(200).send(result);
    }).catch((error: Error) => {
        console.error(error.message);
        response.status(500).send(error);
    });
});

// module.exports = membersRouter;

export { membersRouter }