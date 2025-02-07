// second largest number in given array 


const secondLargets = (arr) => {
    return arr.reduce((acc, crr) => {
        let fristLargest = acc < crr ? crr : acc
        let index = arr.indexOf(fristLargest)
        arr.splice(index, 1)
        let secondLargest = acc < crr ? crr : acc
        return (secondLargest)
    })
}

const myArr = [11, 22, 33, 44, 55, 66, 77, 88, 99]
console.log(secondLargets(myArr))