//Create a function that concatenates n input arrays, where n is variable
//https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

//Examples:
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

function concat(...args) {
    let A = args.toString();
    //let B = [];
    A = A.split(',');
    for (let i = 0; i < A.length; i++) {
        A[i] = parseInt(A[i]);
    }
    return A;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));