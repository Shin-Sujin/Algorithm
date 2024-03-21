function solution(n) {
    var answer = 0;
    num = Math.floor(n/2);
    console.log(num);
    for(let i = 1; i<=num ; i++){
        answer = answer + 2*i;
    }
    return answer;
}