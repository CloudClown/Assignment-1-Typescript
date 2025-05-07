function concatenateArrays<T>(...arrays: T[][]): T[] {
return arrays.flat();
}

const concatArray = concatenateArrays(["a", "b"], ["c"]);
const concatArray1 = concatenateArrays([1, 2], [3, 4], [5]);
const concatArray2 = concatenateArrays([]);
const concatArray3 = concatenateArrays([true], [false]);

console.log(concatArray)
console.log(concatArray1)
console.log(concatArray2)
console.log(concatArray3)