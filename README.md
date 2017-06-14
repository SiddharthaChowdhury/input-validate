# input-validate

Validating inputs server side using RegEx. Create custom validation rules to meet your needs. Also there are pre-defined regex validators for quick use. Read below to know more.

## INSTALL 

`npm i -S input-validate`

## HOW TO USE
  	var TEST = require('input-validate');
  
  	if(TEST.onlyNumber(123)){
      	console.log("It is a valid number.")
  	}

### Client-side tests: [Codepen](https://codepen.io/Austin4Silvers/pen/ggPMoM?editors=1010)


## QUICK CONTENT
	
	- Custom validation [ Check below to create custom rules ]
	- Alphabets ( with and without white spaces  )
	- Numbers ( with and without white spaces  )
	- Alphanumeric ( with and without white spaces  ) 
	- Person details
	- Email
	- Address components ( street, city, state, country )
	- Credit card
	- Many more

## CUSTOM rule creation

	   custom: function(input, allow_rules, flag){
	   		//  Implementation
	   }

### Parameters of custom validation

	1. `input`: (Required) `String`. Is the input to test against the `allow_rules` 
	2. `allow_rules`: (Optional) `Object`. Validation configuration
	3. `flag`: (Optional) `String`. This method uses [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) to validate inputs. This parameter is the flag of the function. : new RegExp('-----', `flag`)

### Create CUSTOM Rule
   
The second parameter of the function `custom("",allow_rules)` is used to create custom validation.
	
	allow_rules = { 
        alphabets: {            // Pass Boolean false if alphabets are not allowed
           uppercase: Boolean, 	// default true 
           lowercase: Boolean  	// default true
        },
        numbers: {              // Pass Boolean false if numbers are not allowed
           range: String       	// default "0-9"
        },
        spaces: Boolean,   		// default true
        symbols: String, 		// default "", exapmle: '-_,' 
        str_length: {           // Object 
            min: Number,  		// default 1
            max: Number  		// default ""
        } 
    }

### Custom rule Example: 
    
    var TEST 	= require('input-validate');
    var str 	= "sample @123";
    var rule 	= {spaces: false, symbols: "$#@"}
    var result 	= TEST.custom(str, rule); // False 
    
    Whats happening here is
    1. We want to validate the string- "sample @123"
    2. Create a rule. The string should not contain in blank_space or any special symbol other than "$#@" these.
    3. Execute the TEST. Validate "str" against the "rule".
    4. Value of "result" is false as {spaces: false .. } and there is a space in str


## OTHER TESTS (Quick use)

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
    }

	password: function(input){
		/*
		    May contain letter and numbers
		    May contain blank space
		    Must contain at least 1 number and 1 letter
		    May contain any of these characters: ._@#$%
		    Must have atleast 8 characters
		*/
	}

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
	}

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
	}

	CVVorCVC: function(input, cardType){
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
	}