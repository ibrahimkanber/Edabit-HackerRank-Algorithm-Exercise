/*Q:1
////How Much is True?
//// Create a function which returns the number of true values there are in an array.
//Answer1
// function countTrue(arr) {
//     let count=0;
//     arr.forEach((item)=>{
//         item===true? count++:count;
//     })
//     return (count)
// }
// countTrue([true,false,false])

// //Answer2
// function countTrue(arr) {
//     return arr.filter(item=>item===true).length
     
//  }
// countTrue([true,false,false])
// */


///--------------------------///
/*
//Q:2
//A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

//Answer
function redundant(str) {
    return function(){ 
          return str   
    }   
}

*/

/*
///Q:3
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.simpleArraySum has the following parameter(s): ar: an array of integers

// function simpleArraySum(ar) {
//    
//     return ar.reduce(((a,b)=>a+b),0)
// }
*/
/*
//Q:4
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.


// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

//Answer1:
function compareTriplets(a, b) {
    let alice=0;
    let bob=0;
    for (let i=0;i<3;i++){
        if (a[i]>b[i]){
            alice++
        }else if(a[i]<b[i]){
            bob++
        }else {
            continue
        }
    
    }

    return(alice,bob)
    
}

//Answer2
*/

// function compareTriplets(a, b) {
//     let alice=0;
//     let bob=0;
//     for (let i=0;i<3;i++){
//      a[i]>b[i]? alice++: a[i]<b[i]? bob++: bob===bob
    
//     }

//     return(alice,bob)
    
// }


///Q:5

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


// let i=0;
// let fibo=(endNumber)=>{
//     while (i<endNumber){
//         arr.push((arr[arr.length-1])+(arr[arr.length-2]));
//         i=arr[arr.length-1]
//     }
//     arr.pop()
//     return console.log(arr)
// }

// fibo(120)
var arr=[0,1];
let fibo=(selectedIndex)=>{
    for(i=0;i<=(selectedIndex);i++){
        arr.push((arr[arr.length-1])+(arr[arr.length-2]));
    }
    return console.log(arr[selectedIndex+1])
    
}

fibo(12)




























