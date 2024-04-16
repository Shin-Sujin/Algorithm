function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 === 0){
        for(let i = 1;i<arr.length ; i += 2){
            arr[i] += n;
        }
    }
    else if(arr.length % 2 === 1){
         for(i = 0;i<arr.length ; i += 2){
            arr[i] += n;
        }
    }
    answer = arr;
    return answer;
}