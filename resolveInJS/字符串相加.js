// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

//  a= 11111111, b= 2222
// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

// todo 使用双指针加快速度
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const num1Length = num1.length;
  const num2Length = num2.length;
  let min, max;
  if (num1Length < num2Length) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }
  maxLength = max.length;
  const lengthDic =
    num1Length - num2Length > 0
      ? num1Length - num2Length
      : num2Length - num1Length;
  let result = "";
  let place = 0;
  for (let i = maxLength - 1; i >= -1; i--) {
    let current = (+min[i - lengthDic] || 0) + (+max[i] || 0) + place;
    if (i === -1 && current === 0) {
      return result;
    }
    if (current >= 10) {
      current = current % 10;
      place = 1;
    } else {
      place = 0;
    }
    result = `${current}${result}`;
  }
  return result;
};

var a = addStrings("0", "0");
console.log(a);
