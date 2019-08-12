//
// Result helper
//
const constants = require('./Status');
"use strict";

const Result = (operation, status, count, mongoResult) => {
    const result = {
        operation: '',
        status: '',
        message: '',
        count: 0,
        mongoResult: null
    };

    result.count = count;
    result.mongoResult = mongoResult;

    switch (status.code) {
        case constants.STATUS.SUCCESS.code:
            result.status = constants.STATUS.SUCCESS.status;
            result.message = constants.STATUS.SUCCESS.message;
            break;
        case constants.STATUS.NOT_FOUND.code:
            result.status = constants.STATUS.NOT_FOUND.status;
            result.message = constants.STATUS.NOT_FOUND.message;
            break;
        case constants.STATUS.ERROR.code:
            result.status = constants.STATUS.ERROR.status;
            result.message = constants.STATUS.ERROR.message;
            break;
        default:
            break;
    }

    switch (operation.code) {
        case constants.OPERATION.CREATE.code:
            result.operation = constants.OPERATION.CREATE.operation;
            break;
        case constants.OPERATION.READ.code:
            result.operation = constants.OPERATION.READ.operation;
            break;
        case constants.OPERATION.UPDATE.code:
            result.operation = constants.OPERATION.UPDATE.operation;
            break;
        case constants.OPERATION.DELETE.code:
            result.operation = constants.OPERATION.DELETE.operation;
            break;
        default:
            break;
    }

    return result;
}

exports.Result = Result;
