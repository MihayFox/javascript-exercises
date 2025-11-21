const sumAll = function(...args) {

    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
        return 'ERROR';
    }

    if (args[0] < 0 || args[1] < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
        return 'ERROR';
    }

    const max = Math.max(...args);
    const min = Math.min(...args);

    let sum = 0;

    for (let i = min; i <= max; i++) {

        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
