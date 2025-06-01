const palindromes = function (str) {
    let reverse = str.toLowerCase()
                     .split('')
                     .reverse();

    reverse = reverse.filter((item) => {
        return ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9'));
    });
    reverse = reverse.join('');

    let cleanedStr = str.toLowerCase()
                        .split('');
    cleanedStr = cleanedStr.filter((item) => {
        return ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9'));
    });
    cleanedStr = cleanedStr.join('');

    return reverse === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
