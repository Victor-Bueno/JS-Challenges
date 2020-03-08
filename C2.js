// Write a function that converts an object into an array, where each element represents a key-value pair.

// Examples:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

function toArray(obj) {
    const A = [];
    for(let [key, value] of Object.entries(obj)) {
        A.push([key, value]);
    }
    return A;
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));