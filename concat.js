const pushValues = (src,dt) => {
    for(let item of dt){
        src.push(item)
    }
    return src;
}


Array.prototype.myConcat = function(){
  let fnArguments = arguments;
  let inputArr = this;
  for(let i=0;i<fnArguments.length;i++){
      if(Array.isArray(fnArguments[i])){
        inputArr = pushValues(inputArr,fnArguments[i])  
      }else{
          inputArr.push(fnArguments[i])
      }
  }
  return inputArr
}

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let val = 'x';
let val1 = undefined 
console.log(arr1.concat(arr2,val,val1))
console.log(arr1.myConcat(arr2,val,val1))
