export const isNumber = (sample) => {
    (typeof sample === "number") ? true : false;
}

export const strictNumbers = (sample, _type = true) => {
    if(_type && typeof sample === "number"){
        if (!sample) return false;
        return (sample) ? /^([0-9]+)$/.test(sample) : false;
    }
    if(_type && typeof sample !== "number"){
        return false;
    }
    if(!_type){
        if (sample === undefined) return false;
        return (sample) ? /^([0-9]+)$/.test(sample) : false;
    }   
}

export const isString = (sample) => {
    (typeof sample === "string") ? true : false;
}

export const strictAlphabets = (sample) => {
    if (typeof sample !== "string") return false;
    return (sample) ? /^([a-zA-Z]+)$/.test(sample) : false;     
}

export const isAlphanumeric = (sample, strict = false) => {
    if (!sample) return false;
    if(strict){
        return sample ? /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z]$/.test(sample) : false;
    }
    return (sample) ? /^([a-zA-Z0-9]+)$/.test(sample) : false;
}

export const quickPassword = (sample) => {
/*
    May contain letter and numbers
    May contain blank space
    Must contain at least 1 number and 1 letter
    May contain any of these characters: ._@#$%
    Must have atleast 8 characters
*/
    if (!sample) return false;
    return (sample) ? /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z ._@#$%]{8,}$/.test(sample) : false;
}

export const isEmail = (sample) => {
    /*  Pursuit of a valid email address  */
    if (!sample || sample.length < 6) return false;
    return (sample) ? /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(sample) : false;
}

export const isPersonName = (sample) => {
/*
    Must be atleast 3 characters
    May contain blank spaces
    May contain "." or "," symbols only
*/  
    if (!sample || sample.length < 3) return false;
    const salutations = ["mr", "master", "sir", "dr", "miss", "ms", "mrs", "prof", "rev", "capt", "maj", "dj", "pvt" ];
    var fullName = sample.replace(",", ".").split('.');

    if(fullName.length > 1){
        if(salutations.indexOf(fullName[0].toLowerCase()) == -1)
            return false;
        sample = fullName[1].trim();
    }
    return (sample) ? /^([a-zA-Z.\s]+){3,}$/.test(sample.trim()) : false;
}

export const isCountry = (sample) => {
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

// MAY contain alphabets or number or both
export const customOr = (sample, changes, regexFlag) => {
    var _default = {
        alphabets: true,
        numbers: '0-9',
        spaces: false,
        symbols: '', 
        minlength: '',
        maxlength: '',
    }

    var config = Object.assign(_default, changes);

    var parts = [];
    // Handling alphabets
    if(typeof config.alphabets === "boolean" && config.alphabets == true){
        parts.push('a-zA-Z');
    }
    if(typeof config.alphabets === "object"){
        if(config.alphabets.lowercase && config.alphabets.lowercase == true){
            parts.push('a-z');
        }
        if(config.alphabets.uppercase && config.alphabets.uppercase == true){
            parts.push('A-Z');
        }
    } 

    // Handling Numbers
    if(typeof config.numbers === "string"){
        var nms = config.numbers.split("-");
        if(nms.length != 2)
            return false;
        if(/^([0-9]+)$/.test(nms[0]) == false || /^([0-9]+)$/.test(nms[1]) == false)
            return false;
        if(nms[0] > nms[1])
            return false;
        
        parts.push(config.numbers);
    }
    if(typeof config.numbers === "boolean" && config.numbers == true) {
        parts.push('0-9');
    }

    // Handling spaces
    if(config.spaces == true){
        parts.push('\\s');
    }
    
    // Handling symbols
    if(config.symbols != ''){
        
        config.symbols = config.symbols.replace('"', '\\"'); 
        config.symbols = config.symbols.replace("'", "\\'");
        config.symbols = config.symbols.replace('/', '\\/');
            
        parts.push(config.symbols)	
    }
    // Handling String lengths. i.e. min and max
    var length = '';
    var regex = '';
    
    if(!isNaN(parseInt(config.minlength)) || !isNaN(parseInt(config.maxlength))){
        length += config.minlength && !isNaN(parseInt(config.minlength )) ? '{'+parseInt(config.minlength) : '{ ';
        length += config.maxlength && !isNaN(parseInt(config.maxlength )) ? ','+parseInt(config.maxlength)+'}' : ',}';
            
        var x = '';
        for(var i = 0; i < parts.length; i++){
            x += parts[i]
        }
        regex = '^['+ x +']'+length+'$';
    } else {
        var x = '';
        for(var i = 0; i < parts.length; i++){
            x += parts[i]
        }
        regex = '^(['+ x +']+)'+length+'$';
    }

    var pattern = new RegExp(regex,regexFlag);
    return pattern.test(sample);
}

// MUST contain alphabets or number or both
export const customAnd = (sample, changes, regexFlag) => {
    var _default = {
        alphabets: true,
        numbers: '0-9',
        spaces: false,
        symbols: '', 
        minlength: '',
        maxlength: '',
    }

    var config = Object.assign(_default, changes);
    
    var parts = [];
    var musts = [];
    // Handling alphabets
    if(typeof config.alphabets === "boolean" && config.alphabets == true){
        parts.push('a-zA-Z');
        musts.push('(?=.*[A-Za-z])');
    }
    if(typeof config.alphabets === "object"){
        if(config.alphabets.lowercase && config.alphabets.uppercase){
            parts.push('a-zA-Z');
            musts.push('(?=.*[A-Za-z])');
        }
        else if(!config.alphabets.lowercase && config.alphabets.uppercase){
            parts.push('A-Z');
            musts.push('(?=.*[A-Z])');
        }
        else if(config.alphabets.lowercase && !config.alphabets.uppercase){
            parts.push('a-z');
            musts.push('(?=.*[a-z])');
        }
    } 

    // Handling Numbers
    if(typeof config.numbers === "string"){
        var nms = config.numbers.split("-");
        if(nms.length != 2)
            return false;
        if(/^([0-9]+)$/.test(nms[0]) == false || /^([0-9]+)$/.test(nms[1]) == false)
            return false;
        if(nms[0] > nms[1])
            return false;
        
        parts.push(config.numbers);
        musts.push('(?=.*['+nms[0]+'-'+nms[1]+'])');
    }
    if(typeof config.numbers === "boolean" && config.numbers == true) {
        parts.push('0-9');
        musts.push('(?=.*\d)')
    }

    // Finalize And/Must part of regex
    var mandt = '';
    for(var i =0; i < musts.length; i++) {
        mandt += musts[i];
    }

    // Handling spaces
    if(config.spaces == true){
        parts.push('\\s');
    }
    
    // Handling symbols
    if(config.symbols != ''){
        
        config.symbols = config.symbols.replace('"', '\\"'); 
        config.symbols = config.symbols.replace("'", "\\'");
        config.symbols = config.symbols.replace('/', '\\/');
            
        parts.push(config.symbols)	
    }

    // Handling String lengths. i.e. min and max
    var regex = '';
    if(!isNaN(parseInt(config.minlength)) || !isNaN(parseInt(config.maxlength))){
        var length = '';
        length += config.minlength && !isNaN(parseInt(config.minlength )) ? '{'+parseInt(config.minlength) : '{1';
        length += config.maxlength && !isNaN(parseInt(config.maxlength )) ? ','+parseInt(config.maxlength)+'}' : ',}';

        var toMatch = '';
        for(var i = 0; i < parts.length; i++) {
            toMatch += parts[i]
        }
        regex = '^'+mandt+'['+ toMatch +']'+length+'$';
    } else {
        var toMatch = '';
        for(var i = 0; i < parts.length; i++) {
            toMatch += parts[i]
        }
        regex = '^'+mandt+'['+ toMatch +']{1,}$';
    }

    var pattern = new RegExp(regex,regexFlag);
    return pattern.test(sample);
}
