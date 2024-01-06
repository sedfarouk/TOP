const palindromes = function (sentence=String){
    const arr = [...sentence];
    const valid_arr = arr
        .map((ch) => ch.toLowerCase())
        .filter(ch => (ch >= 'a' && ch <= 'z')  || (ch >= '0' && ch <= '9'));
    
    return valid_arr.toString()===valid_arr.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;