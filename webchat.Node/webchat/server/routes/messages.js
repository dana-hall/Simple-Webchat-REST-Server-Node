/**
 * Server Routing for the RESTful APIs for messages.
 * 
 * @module messages
 */
var express = require('express');
const response = require('../dto/ResponseMessages');
const constants = require('../dto/helpers/Status');

//
// Exported and used by the server for routing
//
exports.routes = function (app) {
	Message = require('../../server/models/messages');

	// Set routing prefix for api calls
	var router = express.Router();
	app.use('/webchat', router);

	//**************************************************
	// These APIs are used by the html client.
	//**************************************************

	/**
	 * Routes to the create message api.  
	 * Used by send button.
	 */
	router.route('/create')
		.post(function (req, res) {
			Message.CreateMessage(req, function (err, success) {
				console.log("/create");
				if (err) throw err;
				else {
					res.send(response.CreateResponseMessage(constants.STATUS.SUCCESS, req.body, success, err));
				}
			});
		});

	/**
	 * Routes to the DeleteMessages api.
	 * This deletes all messages where fromUser 
	 * equals the from field and the toUser equals
	 * the to field.
	 * NOTE: Uses a POST  
	 */
	router.route('/delete')
		.post(function (req, res) {
			Message.DeleteMessages(req, function (err, success) {
				console.log("/delete");
				if (err) throw err;
				else {
					res.send(response.DeleteResponseMessage(constants.STATUS.SUCCESS, req.body, err));
				}
			});
		});

	/**
	 * Routes to the DeleteMessages api.
	 * This deletes all messages where fromUser 
	 * equals the from field and the toUser equals
	 * the to field.
	 * NOTE: Uses a DELETE  
	 */
	router.route('/delete')
		.delete(function (req, res) {
			Message.DeleteMessages(req, function (err, success) {
				console.log("/delete");
				if (err) throw err;
				else {
					res.send(response.DeleteResponseMessage(constants.STATUS.SUCCESS, req.body, err));
				}
			});
		});

	/**
	 * Routes to the RetrieveAllByUser api.
	 * This retrieves all messages where user 
	 * equals the from or to fields.
	 * Used by the polling timer and login.  
	 */
	router.route('/read/all/:user')
		.get(function (req, res) {
			Message.RetrieveAllByUser(req.params.user, function (err, success) {
				console.log("/read/all/" + req.params.user);
				if (err) throw err;
				else {
					res.send(response.ReadResponseMessage(constants.STATUS.SUCCESS, success, err));
				}
			});
		});

	//**************************************************
	// These APIs were used during development only.
	// Postman was used to develop the server apart
	// from developing the client.
	//**************************************************
	/**
	 * Routes to the RetrieveAllFromUser api.
	 * This retrieves all messages where user 
	 * equals the from field.  
	 * Not used by the html.
	 * Only used by Postman. 
	 */
	router.route('/read/from/:user')
		.get(function (req, res) {
			Message.RetrieveAllFromUser(req.params.user, function (err, success) {
				console.log("/read/from/" + req.params.user);
				if (err) throw err;
				else {
					res.send(response.ReadResponseMessage(constants.STATUS.SUCCESS, success, err));
				}

			});
		});

	/**
	 * Routes to the RetrieveAllToUser api.
	 * This retrieves all messages where fromUser 
	 * equals the from field and the toUser equals
	 * the to field.  
	 * Not used by the html.
	 * Only used by Postman. 
	 */
	router.route('/read/from/:fromUser/to/:toUser')
		.get(function (req, res) {
			Message.RetrieveAllToUser(req.params.fromUser, req.params.toUser, function (err, success) {
				console.log("/read/from/" + req.params.fromUser + "/to/" + req.params.toUser);
				if (err) throw err;
				else {
					res.send(response.ReadResponseMessage(constants.STATUS.SUCCESS, success, err));
				}
			});
		});

	/**
	 * Routes to the retrieve all message api. 
	 * Reads all messages in the document. 
	 * Not used by the html.  Only used by Postman.
	 */
	router.route('/read')
		.get(function (req, res) {
			Message.RetrieveAll(function (err, success) {
				console.log("/read");
				if (err) throw err;
				else {
					res.send(response.ReadResponseMessage(constants.STATUS.SUCCESS, success, err));
				}
			});
		});

	/**
	 * Update a message by id.
	 * NOTE: uses a POST
	 */
	router.route('/update/:id').post(function (req, res) {
		Message.UpdateById(req.params.id, req, function (err, success) {
			console.log("/update/" + req.params.id);
			if (err) throw err;
			else {
				res.send(response.UpdateResponseMessage(constants.STATUS.SUCCESS, success._id, req.body, err));
			}
		});
	});

	/**
	 * Update a message by id.
	 * NOTE: uses a PUT
	 */
	router.route('/update/:id').put(function (req, res) {
		Message.UpdateById(req.params.id, req, function (err, success) {
			console.log("/update/" + req.params.id);
			if (err) throw err;
			else {
				res.send(response.UpdateResponseMessage(constants.STATUS.SUCCESS, success._id, req.body, err));
			}
		});
	});
};
