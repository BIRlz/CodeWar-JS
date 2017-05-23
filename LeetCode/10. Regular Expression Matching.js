/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var p = "^" + p + "$";
    var match = new RegExp(p,'g')
    return match.test(s);    
};
