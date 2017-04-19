# input-validate

Validating inputs server side using RegEx

Install `npm i -S input-validate`

## How to use

      var TEST = require('input-validate');
      if(TEST.onlyNumber(123)){
          console.log("It is a valid number, so add your stuff here")
      }
