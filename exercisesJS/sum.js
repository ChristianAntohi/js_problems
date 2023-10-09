function sum(n) {
    console.log(n)
    return function (a) {
        return sum(a+n)
    }
}
sum(5)
console.log('-------')
sum(5)(2)(10)