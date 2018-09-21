# input-validate

A bunch of pure functions with regular expressions, for input validation purpose (when you are not using any type checking library/framework). A couple of predefined check-functions and a - flexible CUSTOM test function to meet any other random needs!

<!-- ### [Codepen](https://codepen.io/Austin4Silvers/pen/ggPMoM?editors=1010) -->

## INSTALL 

`npm i -S input-validate`

## HOW TO USE
  	var TEST = require('input-validate');
  
  	if ( TEST.strictNumbers(123) ) {
      	console.log("It is a valid number.")
  	}


## Use table of CONTENT to navigate through the page
- [isNumber( )](#isNumber)
- [strictNumbers( )](#strictNumbers)
- [isString( )](#isString)
- [strictAlphabets( )](#strictAlphabets)
- [alphanumeric( )](#alphanumeric)
- [quickPassword( )](#quickPassword)
- [isEmail( )][#isEmail]

## CUSTOM rule creation

	custom: function(input, allow_rules, flag){
		//Implementation
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

<a name="isNumber"></a>**isNumber(input)** checks if input is a valid number uses `typeof`

	// --- usage ---
	if ( TEST.isNumber(123) ) {
      	console.log("It is a valid number.")
  	}


<a name="strictNumbers"></a>**strictNumbers(input, true by default)** checks if input has valid numbers

	// --- usage ---
	if ( TEST.strictNumbers(123) ) {
      	console.log("It is a valid number.")
  	}

	// --- tests ---
	√ should return FALSE - strictNumbers('1234')
    √ should return TRUE - strictNumbers('1234', checkType = false)
    √ should return TRUE - strictNumbers(1234)
    √ should return TRUE - strictNumbers(1234, checkType = false)
    √ should return FALSE - strictNumbers(`123`)
    √ should return TRUE - strictNumbers(`123`, checkType = false)
    √ should return FALSE - strictNumbers()
    √ should return FALSE - strictNumbers(null)
	

<a name="isString"></a>**isString(input)** Checks if input is a valid string uses `typeof`

	// --- usage ---
	if ( TEST.isString("abc") ) {
      	console.log("It is a valid number.")
  	}


<a name="strictAlphabets"/>**strictAlphabets(input)** Checks if input contains only alphabets

	// --- usage ---
	if ( TEST.strictAlphabets("abc") ) {
      	console.log("Contains only alphabets.")
  	}

	// --- tests ---
	√ should return TRUE - strictAlphabets('abc')
    √ should return TRUE - strictAlphabets('abcABC')
    √ should return FALSE - strictAlphabets(123)
    √ should return FALSE - strictAlphabets('1234')
    √ should return FALSE - strictAlphabets(`123`)
    √ should return FALSE - strictAlphabets('123abc')
    √ should return FALSE - strictAlphabets()
    √ should return FALSE - strictAlphabets(null)


<a name="alphanumeric"/> **alphanumeric(input, false by default)** This function takes 2 arguments. first one is input and second one is "strictMode" as boolean. By default `strictMode` = `false`, is that case the validator returns true if the input contains either alphabets or number or both. But when you make the `strictMode` = `true`, it checks for -the input must contain alphabets and numbers. Note -no space or symbols are tolarated.

	--- usage ---
	if ( TEST.alphanumeric("abc") ) {
      	console.log("Valid alphanumeric in strictMode = default|false.")
  	}

	if ( TEST.alphanumeric("abc", true) ) {
  	} else {
		  console.log("InValid alphanumeric in strictMode = true.")
	}

	if ( TEST.alphanumeric("abc123") ) {
      	console.log("Valid alphanumeric")
  	}

	--- tests ---
	√ should return TRUE alphanumeric('abc123ABC')
    √ should return TRUE alphanumeric('abc')
    √ should return FALSE alphanumeric('abc', strict = true)
    √ should return TRUE alphanumeric(123)
    √ should return FALSE alphanumeric(123, strict = true)
    √ should return FALSE alphanumeric('123 abc')
    √ should return FALSE alphanumeric('123@abc')


<a name="quickPassword"/>quickPassword(input): A quick password check with some ground rules:

1. Must contain at least 1 number and 1 letter
2. Must have atleast 8 characters
3. May contain blank space
4. May contain any of these characters: ._@#$%

	--- usage ---
	if ( TEST.quickPassword("123abc_XYZ") ) {
      	console.log("Valid password")
  	}

	--- tests ---
	√ should return FALSE quickPassword('1234567')
    √ should return FALSE quickPassword('123456789')
    √ should return FALSE quickPassword('abcDEFghij')
    √ should return FALSE quickPassword('12345 6789')
    √ should return TRUE quickPassword('12345 A@ 6789')
    √ should return TRUE quickPassword('123abc_XYZ')
    √ should return TRUE quickPassword('1234abcXYZ')


<a name="isEmail"/> **isEmail(input)** Checks for valid email address 

	--- usage ---
	if ( TEST.isEmail("valid@email.addr") ) {
      	console.log("Valid email address")
  	}

	--- tests ---
	√ should return TRUE isEmail('valid@email.addr')
    √ should return TRUE isEmail('VALID@EMAIL.ADDR')
    √ should return TRUE isEmail('valid@email.ad.dr')
    √ should return TRUE isEmail('this-is_va.lid@email.ad.dr')
    √ should return FALSE isEmail('val id@email.ad.dr')
    √ should return FALSE isEmail('val/id@email.ad.dr')
    √ should return FALSE isEmail(' valid@email.ad.dr')
    √ should return FALSE isEmail(' valid@email.addrress')



some other stuff (refactor - WIP)

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


	person_name: function(input){
		/*
		    Must be atleast 3 characters
		    May contain blank spaces
		    May contain "." (Dot) symbol only
		*/
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