const sumAll = function(beg, end) {
    if ((typeof(beg)!="number") || (typeof(end)!="number") || (beg < 0) || (end < 0)) return "ERROR";
    
    let ans = 0;
    for (let i=Math.min(beg, end); i < Math.max(beg, end)+1; i++)
        ans += i;
    return ans;
};

// Do not edit below this line
module.exports = sumAll;