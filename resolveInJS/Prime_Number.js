// 求n 以内的质数
//  质数，只能被1和本身整除的数

// 全员遍历
function getPrimeNumberMap(n) {
  let targetArr = []

  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue
      }
    }
    targetArr.push(i)
  }
  return targetArr
}
// 去除法
function getPrimeNumberDelete(n) {
  let targetArr = []
  let allArr = []
  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
      allArr.push(i)
    }
  }
  function deep(arr) {
    let index = arr.shift()
    let currentArr = []
    targetArr.push(index)
    currentArr = arr.filter(item => item % index !== 0)
    return currentArr.length > 0 ? deep(currentArr) : ''
  }
  deep(allArr)
  return targetArr
}

// const a = getPrimeNumberDelete(100)
// console.log(a)
const b = getPrimeNumberMap(100)
console.log(b)
