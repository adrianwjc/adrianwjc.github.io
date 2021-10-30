function minMaxAverage (arry){
    let min = arry[0];
    let max = arry[0];
    let average = arry[0];
    for (let i = 0; i < arry.lenght; i++){
        if( arry[i] < min){
            min = arry[i]
        } 
        if(arry[i] > max){
            max = arry[i]
        }
        average = average + arry[i]
      
    }
    let totalAverage = average / arry.length
    return [min, max, totalAverage] 
}

let arry = [1,2,4,5,6,7]

console.log(minMaxAverage([arry]))