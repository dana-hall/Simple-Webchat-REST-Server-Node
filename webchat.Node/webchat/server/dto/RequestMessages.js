//
// DTO Requests for CRUD operations
//
"use strict";

//
// DTO Request for Create
// 
const CreateRequestMessage = (from, to, date, message) => {
    const request = {
        from: null,
        to: null,
        date: null,
        message: null
    }
    request.from = from;
    request.to = to;
    request.date = date;
    request.message = message;

    return request;
}

//
// DTO Request for Delete
// 
const DeleteRequestMessage = (from, to) => {
    const request = {
        from: null,
        to: null
    }
    request.from = from;
    request.to = to;

    return request;
}

//
// DTO Request for Update
// NOTE: same as CreateRequestMessage
// 
const UpdateRequestMessage = (from, to, date, message) => {
    return CreateRequestMessage(from, to, date, message);
}

exports.CreateRequestMessage = CreateRequestMessage;
exports.DeleteRequestMessage = DeleteRequestMessage;
exports.UpdateRequestMessage = UpdateRequestMessage;
