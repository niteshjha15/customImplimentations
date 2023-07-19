Array.prototype.customMap = function(callback){
    let array = this;
    let result = []
    for(let i=0;i<array.length;i++){
       result.push(callback(array[i],i,array))
    }
    return result
}

// let arr = [2,4,8,9]
let arr = [{name:"xyz",age:23},{name:"abc",age:28},{name:"pqr",name:"45"}]

console.log(arr.customMap((item) => {
    if(item.age===28){
        return {
            ...item,
            adult:true
        }
    }else{
        return item
    }
}))
