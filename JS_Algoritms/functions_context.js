// const object = {
//   name: "Ivan",
//   getName(){
//     console.log('Hi!', this.name)
//   }
// }


//setTimeout(() => object.getName(), 1000)

//const boundFun = foo.bind(context)


// const object = {
//   name: "Ivan"
// }
//
// function getName(surname){
//   console.log('Hi!', this.name, surname)
// }
//
// const boundedGetName = getName.bind(object, "Petrov")
//
// boundedGetName()


// const sum = (mod, cost) => {
//   console.log(mod + cost)
// }
//
// const boundedSum = sum.bind(null, 2.5)
//
// boundedSum(5)



// const object = {
//   name: "Ivan"
// }
//
// function getName(surname){
//   console.log('Hi!', this.name, surname)
// }
//
// getName.call(object)


// const object = {
//   name: "Ivan"
// }
//
// function getName(surname){
//   console.log('Hi!', this.name, surname)
// }
//
// getName.apply(object, ["petrov"])

// function User(name, surname) {
//   this.name = name
//   this.surname = surname
//
//   this.getUser = function(){
//     return this.name + ' ' + this.surname
//   }
// }
//
// const myUser = new User('Ivan', "Petrov")
//
// console.log(myUser.getUser())
