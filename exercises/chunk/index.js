// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chuncked= [];
    let index = 0;

    while(index < array.length) {
        chuncked.push(array.slice(index, index + size));
        index += size;
    }
  
  return chuncked
}
  
console.log(chunk([1,2,3,4,5,6,7], 2));

//------------Solution 1
// function chunk(array, size) {
//     // console.log(array, size);
//     const chuncked= [];
    
//     for (let ele of array ){
//       const last = chuncked[chuncked.length - 1];
      
//       if(!last || last.length === size) {
//         chuncked.push([ele]);
//       }else {
//         last.push(ele);
//       }
//     }
//     return chuncked;
//  }
  
// console.log(chunk([1,2,3,4,5,6,7], 2));

module.exports = chunk;
