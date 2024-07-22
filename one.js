


const arrNumber = [1, 2, 8, 2, 9, 8, 1];

const duplicates = arrNumber.filter((ele, index, arr) => {

    return arr.indexOf(ele) !== index;
})
console.log(duplicates);

let resutl = arrNumber.indexOf(2);
console.log(resutl);