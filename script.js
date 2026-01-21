function fectorial(num){
    let result = 1;
    for(let i = num ; i >= 1; i--){
         result *= i;
    }
    return result;
}

console.log(fectorial(18));


//with using the while loop


// function fectiorial(num){
//     let result = 1;
//     let i = num;
//     while(i >= 1){
//         result *= i;
//         i--;
//     }

//     console.log(result)
// }

// fectiorial(5)




//with prompt alert on the screen 

// function fectorial(num){
//     let result = 1;
//     for(let i = num ; i >= 1; i--){
//          result *= i;
//     }
//     return result;
// }

// let forPrompt = Number(prompt("enter a number for fectorial"))

// console.log(fectorial(forPrompt));