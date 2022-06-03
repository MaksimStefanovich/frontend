const sum = (a) => {
  return (b) => {
    return a + b
  }
}


console.log(sum(5)(3)) // 8

const modSum = sum(5)
console.log(modSum(3)) // 8