// 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

// 现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

// 示例 1:

// 输入:
// bits = [1, 0, 0]
// 输出: True
// 解释:
// 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
// 示例 2:

// 输入:
// bits = [1, 1, 1, 0]
// 输出: False
// 解释:
// 唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let index = 0;
  let length = bits.length;
  if (length === 0) {
    return false;
  }
  if (length === 1) {
    return bits[0] === 0;
  }
  let current;
  while (index <= length) {
    if (index === length) {
      return current === 0;
    }
    current = bits[index];
    if (current === 0) {
      index += 1;
    } else {
      index += 2;
    }
  }
  return current === 0;
};

const a = isOneBitCharacter([0]);
console.log(a);
