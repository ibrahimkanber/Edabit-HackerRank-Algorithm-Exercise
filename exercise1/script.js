/*Q:1
////How Much is True?
//// Create a function which returns the number of true values there are in an array.
//Answer1
function countTrue(arr) {
    let count=0;
    arr.forEach((item)=>{
        item===true? count++:count;
    })
    return (count)
}
countTrue([true,false,false])

//Answer2
function countTrue(arr) {
    return arr.filter(item=>item===true).length
     
 }
countTrue([true,false,false])
*/


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

