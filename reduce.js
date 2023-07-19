Array.prototype.customReduce = function(callback,finalVal){
    let array = this;
    if(finalVal === null){
        finalVal = arr[0]
    }
    let result=finalVal
    for(let i=0;i<array.length;i++){
       result = callback(result,array[i],i,array)
    }
    return result
}

// let arr = [2,4,8,9]
// let arr = [{name:"xyz",age:23},{name:"abc",age:28},{name:"pqr",age:45}]

// console.log(arr.customReduce((acc,item) => {
//     acc.push(item.age)
//     return acc
// },[]))

// console.log(arr.customReduce((acc,item) => acc+item,0))
