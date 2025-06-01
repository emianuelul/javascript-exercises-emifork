const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }
    
    let number = parseInt(a);

    if(number === 0){
        return 0;
    }
    else if(number === 1){
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
