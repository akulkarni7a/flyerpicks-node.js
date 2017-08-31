// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
const express = require('express');
const passport = require('passport');
const router = express.Router();

const env = {
  AUTH0_CLIENT_ID: 'JrIxW1xGSeBijyLpGptK2cmaVWIzIpHW',
  AUTH0_DOMAIN: 'flyerpicks.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/main'
};


// Routes
// =============================================================
module.exports = function(app) {

	app.get("/login", function(req,res){
		console.log("Login Entered");

	router.get(
	  '/login',
	  passport.authenticate('auth0', {
	    clientID: env.AUTH0_CLIENT_ID,
	    domain: env.AUTH0_DOMAIN,
	    redirectUri: env.AUTH0_CALLBACK_URL,
	    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
	    responseType: 'code',
	    scope: 'openid'
	  }),
	  function(req, res) {
	    res.redirect('/');
	  }
	);


	});

	router.get('/logout', (req, res) => {
	  req.logout();
	  res.redirect('/');
	});

	router.get(
	  '/callback',
	  passport.authenticate('auth0', {
	    failureRedirect: '/'
	  }),
	  function(req, res) {
	    res.redirect(req.session.returnTo || '/user');
	  });

};


  // Get all chirps
  
  