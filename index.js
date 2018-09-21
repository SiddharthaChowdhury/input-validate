module.exports = {
    isNumber: function(sample) {
        (typeof sample === "number") ? true : false;
    },

    strictNumbers: function(sample, _type = true){
        if(_type && typeof sample === "number"){
            if (typeof sample === undefined) return false;
            return (sample) ? /^([0-9]+)$/.test(sample) : false;
        }
        if(_type && typeof sample !== "number"){
            return false;
        }
        if(!_type){
            if (typeof sample === undefined) return false;
            return (sample) ? /^([0-9]+)$/.test(sample) : false;
        }   
    },

    isString: function(sample) {
        (typeof sample === "string") ? true : false;
    },

    strictAlphabets: function(sample){
        if (typeof sample !== "string") return false;
        return (sample) ? /^([a-zA-Z]+)$/.test(sample) : false;     
    },

    alphanumeric: function(sample, strict = false){
        if (typeof sample === undefined) return false;
        if(strict){
            return sample ? /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z]$/.test(sample) : false;
        }
        return (sample) ? /^([a-zA-Z0-9]+)$/.test(sample) : false;
    },

    quickPassword: function(sample){
    /*
        May contain letter and numbers
        May contain blank space
        Must contain at least 1 number and 1 letter
        May contain any of these characters: ._@#$%
        Must have atleast 8 characters
    */
        if (typeof sample === undefined) return false;
        return (sample) ? /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z ._@#$%]{8,}$/.test(sample) : false;
    },

    isEmail: function(sample){
        /*  Pursuit of a valid email address  */
        if (typeof sample === undefined || sample.length < 6) return false;
        return (sample) ? /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(sample) : false;
    },

    isPersonName: function(sample){
    /*
        Must be atleast 3 characters
        May contain blank spaces
        May contain "." or "," symbols only
    */  
        if (typeof sample === undefined || sample.length < 3) return false;
        const salutations = ["mr", "master", "sir", "dr", "miss", "ms", "mrs", "prof", "rev", "capt", "maj", "dj", "pvt" ];
        var fullName = sample.replace(",", ".").split('.');

        if(fullName.length > 1){
            if(salutations.indexOf(fullName[0].toLowerCase()) == -1)
                return false;
            sample = fullName[1].trim();
        }
        return (sample) ? /^([a-zA-Z.\s]+){3,}$/.test(sample.trim()) : false;
    },

    isCountry: function(sample){
        var countries = ["afghanistan","albania","algeria","andorra","angola","anguilla","antigua; barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas"
        ,"bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bosnia; herzegovina","botswana","brazil","british virgin islands"
        ,"brunei","bulgaria","burkina faso","burundi","cambodia","cameroon","canada","cape verde","cayman islands","chad","chile","china","colombia","congo","cook islands","costa rica"
        ,"cote d ivoire","croatia","cruise ship","cuba","cyprus","czech republic","denmark","djibouti","dominica","dominican republic","ecuador","egypt","el salvador","equatorial guinea"
        ,"estonia","ethiopia","falkland islands","faroe islands","fiji","finland","france","french polynesia","french west indies", "west indies","gabon","gambia","georgia","germany","ghana"
        ,"gibraltar","greece","greenland","grenada","guam","guatemala","guernsey","guinea","guinea bissau","guyana","haiti","honduras","hong kong","hungary","iceland","india"
        ,"indonesia","iran","iraq","ireland","isle of man","israel","italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kuwait","kyrgyz republic","laos","latvia"
        ,"lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","mauritania"
        ,"mauritius","mexico","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","namibia","nepal","netherlands","netherlands antilles","new caledonia"
        ,"new zealand","nicaragua","niger","nigeria","norway","oman","pakistan","palestine","panama","papua new guinea","paraguay","peru","philippines","poland","portugal"
        ,"puerto rico","qatar","reunion","romania","russia","rwanda","saint pierre; miquelon","samoa","san marino","satellite","saudi arabia","senegal","serbia","seychelles"
        ,"sierra leone","singapore","slovakia","slovenia","south africa","south korea","spain","sri lanka","st kitts", "saint kitts", "nevis","st lucia", "st. lucia","saint lucia","st vincent", "st. vincent","st. lucia","sudan"
        ,"suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor l'este","togo","tonga","trinidad; tobago","tunisia"
        ,"turkey","turkmenistan","turks; caicos","uganda","ukraine","united arab emirates","united kingdom","united states","united states minor outlying islands","uruguay"
        ,"uzbekistan","venezuela","vietnam","virgin islands (us)", "virgin islands","yemen","zambia","zimbabwe", "us", "uk", "uae"];
        if(countries.indexOf(sample.toLowerCase()) == -1)
            return false;
        return true;
    }
    // street: function(sample){
    // /* 
    //     Must contain atleast 1 alphabet
    //     May contain alphabets and numbers 
    //     May contain special symbols such as .,#/_-
    //     May contain blank spaces
    // */
    //     return (sample) ? /^(?=.*[A-Za-z])[A-Za-z0-9 .,#/_-]{3,50}$/.test(sample) : false;
    // },

    // city_state_country: function(sample) {
    // /* 
    //     Must contain atleast 1 alphabet
    //     Must not contain numbers 
    //     May contain blank spaces
    // */
    //     return (sample) ? /^(?=.*[A-Za-z])[A-Za-z ]{3,50}$/.test(sample) : false;
    // },

    // acct_number: function(sample) {
    // /* 
    //     Must contain atleast 1 alphabet
    //     Must contain atleast 1 number
    //     Must not contain any special symbol or blank space
    // */
    //     return (sample) ? /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z]{9,18}$/.test(sample) : false;
    // },

    // credit_card_type: function(sample){
    //     var cardWorld = {
    //         mc: "Mastercard",
    //         ec: "Eurocard",
    //         vi: "Visa",
    //         ax: "American Express",
    //         dc: "Diners Club",
    //         bl: "Carte Blanch",
    //         di: "Discover",
    //         jcb: "JCB",
    //         er: "Enroute"
    //     }
    //     var flag = false;
    //     for(var i in cardWorld){
    //         if(sample == i || sample == cardWorld[i]){
    //             flag = true;
    //             break;
    //         }
    //     }
    //     return flag;
    // },

    // credit_card_number: function(sample, card_type){
    //     var cardinfo = {
    //         'mc':'5[1-5][0-9]{14}',
    //         'ec':'5[1-5][0-9]{14}',
    //         'vi':'4(?:[0-9]{12}|[0-9]{15})',
    //         'ax':'3[47][0-9]{13}',
    //         'dc':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
    //         'bl':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
    //         'di':'6011[0-9]{12}',
    //         'jcb':'(?:3[0-9]{15}|(2131|1800)[0-9]{11})',
    //         'er':'2(?:014|149)[0-9]{11}'
    //     }
    //     sample = String(sample).replace(/[- ]/g,''); //ignore dashes and whitespaces

    //     var results = [];
    //     if(card_type){
    //         var expr = '^' + cardinfo[card_type.toLowerCase()] + '$';
    //         return expr ? !!sample.match(expr) : false; // boolean
    //     }
    //     else
    //         return false;

    //     for(var p in cardinfo){
    //         if(sample.match('^' + cardinfo[p] + '$')){
    //             results.push(p);
    //         }
    //     }
    //     return results.length ? results.join('|') : false; // String | boolean
    // },

    // CVVorCVC:function(sample, cardType){
    //     var _length;
    //     switch (cardType.toLowerCase()){
    //         case 'mc':
    //         case 'ec':
    //         case 'vi':
    //         case 'di':
    //         case 'dc':
    //         case 'jcb':
    //         case 'er':
    //         case 'bl':
    //             _length = 3;
    //             break;
    //         case 'ax':
    //             _length = 4;
    //             break;
    //     }
    //     if(/^([0-9]+)$/.test(sample)){
    //         if(sample.toString().length == _length)
    //             return true;
    //     }
    //     return false;
    // },

    // // Takes only alphabets and spaces
    // alphabets_spaces: function(sample){
    //     /* 
    //       Must contain atleast 1 alphabet
    //       Must not contain numbers or special symbols
    //       May contain blank spaces
    //     */
    //      return (sample) ? /^(?=.*[A-Za-z])[A-Za-z ]{1,}$/.test(sample) : false;
    // },

    // // Takes only numbers and spaces
    // number_spaces: function(sample){
    //     /* 
    //       Must contain atleast 1 number
    //       Must not contain alphabets or symbols
    //       May contain blank spaces
    //     */
    //      return (sample) ? /^(?=.*[0-9])[0-9 ]{1,}$/.test(sample) : false;
    // },

    // alphanumericspace: function(sample){
    //   // returns false if string contains anything other than alphabets or numbers or spaces
    //     return (sample) ? /^([a-zA-Z0-9\s]+)$/.test(sample) : false;
    // },

    // custom: function(sample, flags = {}, regexFlag = ""){
    //     /*
    //     allows = { // Optional
    //         alphabets: {
    //            uppercase: true, // default
    //            lowercase: true  // default
    //         },
    //         numbers: {
    //            range: '0-9' // default
    //         },
    //         spaces: true,    // default
    //         symbols: '-_,.', // default, exapmle: '-_,' 
    //         str_length: {
    //             min: 1,  // default
    //             max: ""  // default
    //         } 
    //     }

    //     regexFlag: Uses validation uses RegExp. this is the flag of the function: new RegExp('pattern', regexFlag); // Optional
    //     */
    //     var alpha = "", //"a-zA-Z",
    //         nums = "", //"0-9",
    //         symbols = "", //"-_,.",
    //         spaces = "",
    //         minlngth = 1,
    //         maxlngth = "";
    //     if(flags.str_length){
    //        if(flags.str_length.min)
    //           minlngth = parseInt(flags.str_length.min);
    //        if(flags.str_length.max)
    //           maxlngth = parseInt(flags.str_length.max);
    //     }
      
    //     if(flags.alphabets){
    //        if(!flags.alphabets.lowercase)
    //           alpha += '';
    //        else
    //           alpha += 'a-z';
    //        if(!flags.alphabets.uppercase)
    //           alpha += '';
    //        else
    //           alpha += 'A-Z'
    //     }else{
    //         if(flags.alphabets == false)
    //             alpha = '';
    //         else
    //             alpha = 'a-zA-Z'
    //     }
      
    //     if( flags.numbers ){
    //         if(flags.numbers.range)
    //           nums = flags.numbers.range
    //     }else{
    //         if(flags.numbers === false)
    //             nums = "";
    //         else
    //             nums = '0-9';
    //     }
      
    //     if( flags.spaces === undefined || flags.spaces == true ){
    //        spaces = " ";
    //     }else{
    //        spaces = "";
    //     }
      
    //     if(flags.symbols)
    //       symbols = flags.symbols.toString();
    //     else
    //       symbols = ""

    //     var str = '^['+alpha+nums+spaces+symbols+']{'+minlngth+','+maxlngth+'}$'
    //     var pattern = new RegExp(str,regexFlag)
    //     return pattern.test(sample);
    // }
};