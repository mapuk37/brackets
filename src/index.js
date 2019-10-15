module.exports = function check(str, bracketsConfig) {
    const chars = str.split('');
    let stack = [];
    let first = [];

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === bracketsConfig[j][1] && first[j] === undefined) {            
                  first[j] = true;
                };

            if (bracketsConfig[j][0] === chars[i] && (first[j] === true || first[j] === undefined)) {
                stack.push(j);
                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                  first[j] = false;
                };                  
                break;
            };

            if (bracketsConfig[j][1] === chars[i] && (first[j] === undefined || first[j] === false)) {
                let openIndex = stack.pop();
                if (j !== openIndex) {
                    return false;
                };
                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                  first[j] = true;
                };    
            }
        }
    };
    if (stack.length !== 0) {
        return false;
    };

    return true;    
};
