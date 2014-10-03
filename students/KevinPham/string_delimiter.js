function stringDelimiter(inputString, delimiter) {
    var output = [];
    var str = "";
    
    for (i = 0; i < inputString.length; i++) {
        if (inputString[i] === delimiter) { 
            output.push(str); // pushing string to array
            str = ""; // resetting string value
        } else {
            str += inputString[i]; // adding next letter in string
        }
    }
    
    return output;
}

var sampleInput = 'asdf$lskd1234$asdo$$$';

stringDelimiter(sampleInput, '$');

// JSFIDDLE: http://jsfiddle.net/kpham13/70z4k4jp/3/
