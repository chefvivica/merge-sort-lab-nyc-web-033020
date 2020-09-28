function findMinAndRemoveSorted(arr) {
  let min = arr[0]
  let index = 0
  for( let i = 0; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
      index = i
    }
    arr.splice(index,1)
    return min
  }
}


function merge(arr1, arr2){
  let first = arr1[0]
  let second = arr2[0]
  if(first < second){
    sorted.push(first)
  }else{
    sorted.push(second)
  }

  
}