var reverse = function(x) {   
var strReturn = "";     
var result = 0;
    if (x < 0) {
        x = x * -1;
        var n = x.toString();
        var splitn = n.split("");    
        var reversen = splitn.reverse();
        var joinN = reversen.join("");    
        strReturn = "-" + joinN;
        
    } else {
        var n = x.toString();
        var splitn = n.split("");    
        var reversen = splitn.reverse();
        strReturn = reversen.join("");               
    }
    result = parseInt(strReturn);
    if (result >= ((-2)**31) && result <= (2**31)) {
        return result
    } else
    return 0;
    
};
