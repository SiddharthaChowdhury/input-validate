# input-validate

Validating inputs server side using RegEx

## Install 

`npm i -S input-validate`

## How to use

  	var TEST = require('input-validate');
  
  	if(TEST.onlyNumber(123)){
    	console.log("It is a valid number, so add your stuff here")
  	}

## Quick content
	
	- Alphabets ( with and without white spaces  )
	- Numbers ( with and without white spaces  )
	- Alphanumeric ( with and without white spaces  ) 
	- Person details
	- Email
	- Address components ( street, city, state, country )
	- Credit card
	- Many more

## TESTS in details

	onlyNumber: function(input){
		// return true if input is NUMBER (only) 	
	}

	onlyAlphabets: function(input){
		// return true if input is ALPHABET/s (only)
	}
	

	alphanumeric: function(input){
		// returns false if string contains anything other than ALPHABETS OR NUMBERS
	}

    alphabets_spaces: function(input){
    	/* 
			ALPHABETS and SPACES
	      	Must contain atleast 1 alphabet
	      	Must not contain numbers or special symbols
	      	May contain blank spaces
	    */
    }

    number_spaces: function(input){
    	/* 
	    	NUMBERS and SPACES
	      	Must contain atleast 1 number
	      	Must not contain alphabets or symbols
	      	May contain blank spaces
	    */
    }

    alphanumericspace: function(input){
      	// returns false if string contains anything other than ALPHABETS or NUMBERS with SPACES
    },

	password: function(input){
		/*
		    May contain letter and numbers
		    May contain blank space
		    Must contain at least 1 number and 1 letter
		    May contain any of these characters: ._@#$%
		    Must have atleast 8 characters
		*/
	},

	person_name: function(input){
		/*
		    Must be atleast 3 characters
		    May contain blank spaces
		    May contain "." (Dot) symbol only
		*/
	}

	email: function(input){
		//  The pursuit of a valid email address
	}

	street: function(input){
		/* 
		    Must contain atleast 1 alphabet
		    May contain alphabets and numbers 
		    May contain special symbols such as .,#/_-
		    May contain blank spaces
		*/
	}

	city_state_country: function(input) {
		/* 
	        Must contain atleast 1 alphabet
	        Must not contain numbers or special symbols
	        May contain blank spaces
	    */
	}

	acct_number: function(input) {
		/* 
		    Must contain atleast 1 alphabet
		    Must contain atleast 1 number
		    Must not contain any special symbol or blank space
		*/
	}

	credit_card_type: function(input){
	    /* 
	    	Test if Credit card type is valid 
	    	Card types------------
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

	credit_card_number: function(input, cardType){
	    /* 
	    	Test for valid credit card number
	    	Card types------------
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

	CVVorCVC:function(input, cardType){
		/* 
			Test for valid CVV
			Card types------------
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

