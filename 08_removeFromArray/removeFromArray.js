const removeFromArray = function(arr, ...theArgs) {

    let solution = [];

    solution = arr.filter((item) => {return !theArgs.includes(item)});
    
    return solution;
};


// Do not edit below this line
module.exports = removeFromArray;
