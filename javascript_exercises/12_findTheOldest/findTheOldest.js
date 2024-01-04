const findTheOldest = function(people) {
    return people.reduce((oldest, person)=>{
        return getAge(oldest) > getAge(person) ? oldest : person;
    });
};

function getAge(obj){
    let yoB = obj.yearOfBirth, yoD = obj.yearOfDeath;
    if (!yoD){
        yoD = new Date().getFullYear();
    };
    return yoD-yoB;
}

// Do not edit below this line
module.exports = findTheOldest;