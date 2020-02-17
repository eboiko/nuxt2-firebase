// About Firebase Cloud Functions:
// https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");
const express = require("express");
const app = express();
const config = {
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/assets/"
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  try {
    nuxt.render(req, res);
  } catch (err) {
    console.error(err);
  }
}

app.use(handleRequest);
exports.nuxt = functions.https.onRequest(app);
