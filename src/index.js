module.exports = function check(str, bracketsConfig) {
  
  const openBrackets = ['(', '[', '{', '<' ]

  const pairs = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['>']: '<'
  };

  let stack = [];
 newStr = str.split('|').join("")

  for(let i = 0; i < newStr.length; i++) {


    let current = newStr[i];


    if(openBrackets.includes(current)) {
      stack.push(current);
    } else {
      if(stack.length === 0) {
        return false
      }

      let topEl = stack[stack.length - 1];

      if (pairs[current] === topEl) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
if ((str.length - newStr.length) % 2 !== 0) {
  return false;
}

return stack.length === 0;

}
