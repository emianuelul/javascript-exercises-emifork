const findTheOldest = function(arr) {
    
    let max = -1;
    let oldest;
    const currentDate = new Date();
    const year = currentDate.getFullYear(); 

    for(const person of arr){
        if(person.yearOfDeath != undefined){
            if (max < person.yearOfDeath - person.yearOfBirth){
                oldest = person;
                max = person.yearOfDeath - person.yearOfBirth;
            }
        }
        else{
            if(max < year - person.yearOfBirth){
                oldest = person;
                max = year - person.yearOfBirth;
            }
        }
    }

    return oldest;
};



// Do not edit below this line
module.exports = findTheOldest;
