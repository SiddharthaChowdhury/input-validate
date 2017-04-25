# input-validate

Validating inputs server side using RegEx

Install 

`npm i -S input-validate`

## How to use

      	var TEST = require('input-validate');
      
      	if(TEST.onlyNumber(123)){
        	console.log("It is a valid number, so add your stuff here")
      	}

## Functions

	onlyNumber: function(sample){
	    // returns false if input is not a number 
	    return /^([0-9]+)$/.test(sample);
	},

	onlyAlphabets: function(sample){
	  // returns false if input is not a string of alphabets
	    return /^([a-z]+)$/.test(sample);
	},

	alphanumeric: function(sample){
	  // returns false if string contains anything other than alphabets or numbers
	    return /^([a-zA-Z0-9]+)$/.test(sample);
	},

	password: function(sample){
	/*
	    May contain letter and numbers
	    May contain blank space
	        Must contain at least 1 number and 1 letter
	        May contain any of these characters: ._@#$%
	        Must have atleast 8 characters
	*/
	    return /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z ._@#$%]{8,}$/.test(sample);
	},

	person_name: function(sample){
	/*
	    Must be atleast 3 characters
	    May contain blank spaces
	    May contain "." (Dot) symbol only
	*/
	    return /^([a-zA-Z.\s]+){3,}$/.test(sample.trim());
	},

	email: function(sample){
	/*  Pursuit of a valid email address  */
	    return /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(sample);
	},

	street: function(sample){
	/* 
	    Must contain atleast 1 alphabet
	    May contain alphabets and numbers 
	    May contain special symbols such as ._-
	    May contain blank spaces
	*/
	    return /^(?=.*[A-Za-z])[A-Za-z0-9 .,#_-]{3,50}$/.test(sample);
	},

	state: function(sample) {
	/* 
	    Must contain atleast 1 alphabet
	    Must not contain numbers 
	    May contain special symbols such as ._-
	    May contain blank spaces
	*/
	     return /^(?=.*[A-Za-z])[A-Za-z ._-]{3,50}$/.test(sample);
	},

	acct_number: function(sample) {
	/* 
	    Must contain atleast 1 alphabet
	    Must contain atleast 1 number
	    Must not contain any special symbol or blank space
	*/
	    return /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z]{9,18}$/.test(sample);
	},

	// Test if Credit card type is valid 
	credit_card_type: function(sample){
	    /* Card types------------
	            mc: "Mastercard",
	            ec: "Eurocard",
	            vi: "Visa",
	            ax: "American Express",
	            dc: "Diners Club",
	            bl: "Carte Blanch",
	            di: "Discover",
	            jcb: "JCB",
	            er: "Enroute"
	        ---------------------
		*/
		valid returns TRUE
			else FALSE
	},

	// Test for valid credit card numer
	credit_card_number: function(sample, cardType){
	    /* Card types------------
	            mc: "Mastercard",
	            ec: "Eurocard",
	            vi: "Visa",
	            ax: "American Express",
	            dc: "Diners Club",
	            bl: "Carte Blanch",
	            di: "Discover",
	            jcb: "JCB",
	            er: "Enroute"
	        ---------------------
		*/
		valid returns string
			else FALSE
	},

	// Test for valid CVV
	CVVorCVC:function(sample, cardType){
		/* Card types------------
	            mc: "Mastercard",
	            ec: "Eurocard",
	            vi: "Visa",
	            ax: "American Express",
	            dc: "Diners Club",
	            bl: "Carte Blanch",
	            di: "Discover",
	            jcb: "JCB",
	            er: "Enroute"
	        ---------------------
		*/
		valid returns TRUE
			else FALSE
	},

