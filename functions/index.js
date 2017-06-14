'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.helloTest = functions.https.onRequest((request, response) => {
  response.send("Test Test from Firebase!");
 });

 exports.gps = functions.https.onRequest((request, response) => {
 	var lat = request.body.latitude;
 	var lon = request.body.longitude;

 	response.send("Lat = " + lat);

 	var time = 100
 	var userID = 92

 	var push_data = {userID: userID, time: time, latitude: lat, longitude: lon};
  	// [START adminSdkPush]
  	// Push the new message into the Realtime Database using the Firebase Admin SDK.
  	admin.database().ref('/test').push(push_data).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    		//res.redirect(303, snapshot.ref);
		});
 });

 exports.queryTest = functions.https.onRequest((request, response) => {

	var ref = admin.database().ref("/test");
	var query = ref.orderByChild("time").equalTo(100);
	query.once("value")
	  .then(function(snapshot) {
	  	 	var responseStr;
	    snapshot.forEach(function(childSnapshot) {
	      // key will be "ada" the first time and "alan" the second time
	      var key = childSnapshot.key;
	      responseStr = responseStr + key;
	      
		});
	    response.send(responseStr);
	});
		

 });

//for user to upload message token
 exports.token = functions.https.onRequest((request, response) => {

 	var ID = request.body.ID;
 	var token = request.body.token;

 	console.log('ID: ' + ID);
 	console.log('token: ' + token);

 	response.send(token);

 });