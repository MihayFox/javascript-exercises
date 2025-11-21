const repeatString = function(repeatString, numTimes) {

    if (numTimes < 0) {
        return 'ERROR';
    }

    let i = 0;
    let result = '';
    for (i = 0; i < numTimes; i++) {

        result += repeatString;
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
