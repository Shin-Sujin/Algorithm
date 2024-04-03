function solution(n) {
    var answer = [];
    i = 1;
    while(i <= n){
        answer.push(i);
        i += 2;
    }
    return answer;
}