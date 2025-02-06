const maxArr = [111, 999, 2, 554, 3, 4, 3343,]
// console.log(Math.max(...maxArr))
// console.log(Math.min(...maxArr))


// console.log(Math.max([111, 999, 2, 554, 3, 4, 3343]))
// Since "111,999,2,554,3,4,3343" is not a valid number, JavaScript returns NaN (Not a Number).


// solution my way
const myArr = [111, 999, 2, 554, 3, 4, 3343,]

const maxFunction = () => {
    return `the max number of array is : ${Math.max(...maxArr)}`
}
console.log(maxFunction());

const minFunction = () => {
    return `the min number of array is : ${Math.min(...maxArr)}`
}
console.log(minFunction())

// using reduce method 

const maxMinValFun = (arr) => {
    return arr.reduce((acc, crr) => {
        if (true) acc < crr ? crr : acc

         if (true) {
            return acc > crr ? crr : acc

        }
    })
}

const newArr = [111, 999, 2, 554, 3, 4, 3343,];
console.log(maxMinValFun(newArr))