function solution(n) {
    var answer = 0;
    let arr = [];
    
    for(let i = 1; i<=n ; i++){
        if ((n % i) == 0){
            arr.push(i);
        }   
}
    for(let j = 0 ; j<arr.length ; j++){
        answer += arr[j];
    }
    
    
    return answer;
}