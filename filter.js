Array.prototype.customFilter = function(callback){
    let array = this;
    let result = []
    for(let i=0;i<array.length;i++){
        if(callback(array[i],i,array)){
            result.push(array[i])
        }
  
    }
    return result
}

// let arr = [2,4,8,9]
// let arr = [{name:"xyz",age:23},{name:"abc",age:28},{name:"pqr",age:45}]

// console.log(arr.customFilter((item) => {
//     if(item.age>=28){
//         return true
//     }else{
//         return false
//     }
// }))

// console.log(arr.customFilter(item => item<5))
