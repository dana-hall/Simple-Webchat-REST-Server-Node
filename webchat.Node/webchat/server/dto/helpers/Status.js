//
// Status and Operation enum helpers
//
"use strict";

const Constants = (function () {
    const Constants = () => { }

    const Status = () => {
        const STATUS = {
            SUCCESS: {
                code: 1,
                status: 'Success',
                message: "Operation Successful"
            },
            ERROR: {
                code: -1,
                status: 'Error',
                message: "Operation Failure"
            },
            NOT_FOUND: {
                code: 0,
                status: 'Success',
                message: "No results or not found"
            }
        }
        return STATUS;
    }

    const Operation = () => {
        const OPERATION = {
            CREATE: {
                code: 0,
                operation: 'Create'
            },
            READ: {
                code: 1,
                operation: 'Read',
            },
            UPDATE: {
                code: 2,
                operation: 'Updaate'
            },
            DELETE: {
                code: 3,
                operation: 'Delete'
            }
        }
        return OPERATION;
    }

    return {
        STATUS: Status(),
        OPERATION: Operation()
    };
}());

exports.STATUS = Constants.STATUS;
exports.OPERATION = Constants.OPERATION;
