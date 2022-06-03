
function Foo(num) {
  this.num = num

  this.getNum = (n) => {
    return this.num + n
  }
}

const myFoo = new Foo(5)
//console.log(myFoo.getNum(2))

//console.log(sum(3,5))
function sum(a, b) { // declaration
  return a + b
}

const multi = function(a, b){ // expression
  this.mod = 1
  return a * b + this.mod
}

// console.log(multi(3,5))
// console.log(multi(4).mod)


const fuct = (n) => {
  let result = 1
  for(let i = 2; i <= n; i++){
    result *= i
  }
  return result
}

//console.log(fuct(3))


const o = {
  name: "max",
  age: 33,
  getData: function(field){
    return this[field]
  }
}

o.gender = 'male'

const newField = 'surname'
o[newField] = 'unknown'

//console.log(o.getData('age'))


const arr = [1,2,3,4,5, 'one', () => 4, false]

console.log(arr)