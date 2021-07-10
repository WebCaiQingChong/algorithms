// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

//  

// 示例：

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
//  

// 提示：

// 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。


/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let spaceArr = [0]
    let len = s.length
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') {
            spaceArr.push(i - 1)
        }
    }
    spaceArr.push(len - 1)

    let cursor = 0
    let cursorLen = spaceArr.length - 1
    let flag = false
    while (cursor < cursorLen) {
        let left = cursor === 0 ? spaceArr[cursor] : spaceArr[cursor] + 2
        let right = spaceArr[cursor + 1]
        
        if (right + 1 >= len) {
            flag = true
        }
        while (left <= right) {
            result += s[right]
            right --
        }
        cursor ++
        if (flag) {
            break
        }
        result += ' '
    }

    return result
};

const a = "Let's take LeetCode contest"
console.log(reverseWords(a))