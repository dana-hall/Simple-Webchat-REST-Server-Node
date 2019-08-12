//
// DTO Responses for CRUD operations
//
const constants = require('./helpers/Status');
const result = require('./helpers/Result');
"use strict";

//
// DTO Response for Read
//
const ReadResponseMessage = (status, messages, mongoResult) => {
    const response = {
        messages: null,
        result: null
    }

    response.result = result.Result(constants.OPERATION.READ, status, messages.length, mongoResult);
    response.messages = messages;

    return response;
}

//
// DTO Response for Create
// 
const CreateResponseMessage = (status, req, message, mongoResult) => {
    const response = {
        message: null,
        request: null,
        result: null
    }

    response.result = result.Result(constants.OPERATION.CREATE, status, 1, mongoResult);
    response.message = message;
    response.request = req;

    return response;
}

//
// DTO Response for Delete
// 
const DeleteResponseMessage = (status, req, mongoResult) => {
    const response = {
        request: null,
        result: null
    }

    response.result = result.Result(constants.OPERATION.DELETE, status, -1, mongoResult);
    response.request = req;

    return response;
}

//
// DTO Response for Update
// 
const UpdateResponseMessage = (status, id, req, mongoResult) => {
    const response = {
        id: null,
        request: null,
        result: null
    }

    response.result = result.Result(constants.OPERATION.UPDATE, status, 1, mongoResult);
    response.id = id;
    response.request = req;

    return response;
}

exports.ReadResponseMessage = ReadResponseMessage;
exports.CreateResponseMessage = CreateResponseMessage;
exports.DeleteResponseMessage = DeleteResponseMessage;
exports.UpdateResponseMessage = UpdateResponseMessage;
