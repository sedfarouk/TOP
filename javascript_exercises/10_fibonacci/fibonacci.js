const fibonacci = function(pos) {
    pos = Number(pos);
    if (pos < 0) return "OOPS";
    if (pos === 0) return 0;
    if (pos < 3) return 1;
    let a=1, b=1, c=0;
    
    for (let i=0; i < pos-2; i++){
        c = a + b;
        b = a;
        a = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;