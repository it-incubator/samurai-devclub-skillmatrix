const user1 = { name: 'Alice' } // new Object()
const user2 = { name: 'Bob' } // new Object()

//console.log(user1.toString === Object.prototype.toString)

// user1.entries().forEach(entry => {
//     console.log(entry)
// })



// console.log(Object.prototype === user1.__proto__)
// console.log(Object.prototype === user2.__proto__)
// console.log(user1.__proto__ === user2.__proto__)
//
// const arr1 = new Array() // Array
// const arr2 = [] // Array
// console.log(Array.prototype === arr1.__proto__)
// console.log(Array.prototype === arr2.__proto__)

const f1 = () => {alert('sdsd')} // Function
const f2 = function() {} // Function

console.log(Function.prototype === f1.__proto__)
console.log(Function.prototype === f2.__proto__)
console.log(Function.prototype === Object.getPrototypeOf(f2))


// user1.entries().forEach(entry => {
//     console.log(entry)
// })

// console.log(user1)

    // ([]).filter() // Array.prototype


//
// Object.entries(user1).forEach((kv) => {
//     console.log(kv)})

Object.entries(Object.prototype).forEach((kv) => {
     console.log(kv)
}) // ❌


const obj1 = Object.create(null)
//obj1.toString()
console.log(obj1)

const pr1 = new Promise((res) =>res())
const pr2 = Promise.resolve(12)// allSettled/resolve/rejct
pr1.then(() =>{})
//pr1.all([])// catch/finally

const promise = fetch('https://google.com')// new Promise()
promise.then() // promise.__proto__.then === Promise.prototype.then