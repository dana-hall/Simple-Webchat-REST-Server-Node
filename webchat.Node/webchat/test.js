const constants = require('./server/dto/helpers/Status');
const result = require('./server/dto/helpers/Result');
const response = require('./server/dto/ResponseMessages');
const request = require('./server/dto/RequestMessages');

console.log("SUCCESS: ", constants.STATUS.SUCCESS);
console.log("READ: ", constants.OPERATION.READ);

console.log("Result: ", result.Result(constants.OPERATION.READ, constants.STATUS.SUCCESS, 50, { count: 50, error: "No errors" }));

const messages = [{ message: "hello" }, { message: "goodbye" }];
const message = "I Love the Mountains";
const reqCreate = request.CreateRequestMessage("Dana", "Ringo", new Date().toString(), message);
const reqDelete = request.DeleteRequestMessage("Dana", "Ringo");

// Response messages
console.log("ReadResponse: ", response.ReadResponseMessage(constants.STATUS.SUCCESS, messages, { count: 2, error: "No errors" }))
console.log("CreateResponse: ", response.CreateResponseMessage(constants.STATUS.SUCCESS, reqCreate, message, { count: 1, error: "No errors" }))
console.log("DeleteResponse: ", response.DeleteResponseMessage(constants.STATUS.SUCCESS, reqDelete, { count: 1, error: "No errors" }))
console.log("UpdateResponse: ", response.UpdateResponseMessage(constants.STATUS.SUCCESS, 12345, reqCreate, { count: 1, error: "No errors" }))

// Request messages
console.log("CreateRequest: ", request.CreateRequestMessage("Dana", "Ringo", new Date().toString(), messages[0]));
console.log("DeleteRequest: ", request.DeleteRequestMessage("Dana", "Ringo"));
console.log("UpdateRequest: ", request.UpdateRequestMessage("Dana", "Ringo", new Date().toString(), messages[0]));
