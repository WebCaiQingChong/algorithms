// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

//

// 示例 1：

// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 输入：A = [2,7,4], K = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455
// 示例 3：

// 输入：A = [2,1,5], K = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021
// 示例 4：

// 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
// 输出：[1,0,0,0,0,0,0,0,0,0,0]
// 解释：9999999999 + 1 = 10000000000
//

// 提示：

// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// 如果 A.length > 1，那么 A[0] != 0

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  function add(num1, num2) {
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
  }
  const numberStr = A.join("");
  const resultNumer = add(numberStr, `${K}`);
  const newResult = [...`${resultNumer}`].map(x => +x);

  return newResult;
};

const a = addToArrayForm(
  [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  516
);
console.log(a);
