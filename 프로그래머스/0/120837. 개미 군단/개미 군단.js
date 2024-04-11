function solution(hp) {
    var answer = 0;
    answer += Math.floor(hp/5);
    if(hp%5 >= 3){
        answer += hp%5 - 3 + 1;
    }
    else {
        answer += hp%5;
    }
    
    return answer;
}