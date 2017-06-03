var functions = require('firebase-functions');

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
 	var lon = request.body.longtitude;
 	response.send("Lat = " + lat);
 });