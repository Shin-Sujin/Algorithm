function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i<arr.length ; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    
    if(answer.length === 0){
        answer.push(-1);
    }
    //오름차순
    answer.sort(function(a, b) {
    return a - b;
});

    
    
    
    return answer;
}