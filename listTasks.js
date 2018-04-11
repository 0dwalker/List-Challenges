
function largest(list){
let largest = list[0];
    for(let a = 0; a < list.length; a++){
        if(list[a] > largest){
            largest = list[a];
        }
    }
    return largest;
}

function reverse(list){
let array = [];
    for(let a = 0; a < list.length; a++){
        array.push(list[list.length-a-1]);
    }
    return array;
}

function contains(list,e){
       for(let a = 0; a < list.length; a++){
            if(list[a] == e){
                   return "Contains"
            }
       }
       return "Does not Contain"
}


function oddElements(list){
      let array = [];
      for(let a = 1; a < list.length; a = a + 2){
            array.push(list[a]);
      }
      return array;
}


function total(list){
      let sum = 0;
      for(let a = 0; a < list.length; a++){
            sum = sum + list[a];
      }
      return sum;
}

function isPalindrome(list){
      
      for(let a = 0; a < (list.length) * 0.5; a++){
            if(list[a] == list[list.length - a + 1]){

            }
      }

}

//Task 7
//Do second to last
function recursiveTotal(list){

}
//Task 8
function concatenate(listA, listB){

}

//Task 9
function weave(listA, listB){

}

//Task 10
//Attempt last
function mergeInOrder(listA, listB){

}

//Task 11
function rotate(list,k){

}

//Task 12
function fibonacci(){

}

console.log(largest([3,2,4,5,6,7,8,9,10,1]));
console.log(reverse([3,2,4,5,6,7,8,9,10,1]));
console.log(contains([3,2,4,5,6,7,8,9,10,1], 6));
console.log(oddElements([3,2,4,5,6,7,8,9,10,1]));
console.log(total([3,2,4,5,6,7,8,9,10,1]));
