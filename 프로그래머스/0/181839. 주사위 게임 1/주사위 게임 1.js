function solution(a, b) {
    var answer = 0;
    if(a%2 === 0 && b%2 === 0){
         answer = a - b
        if(answer < 0){
            answer = -answer;
        }
    }
    else if(a%2 !== 0 && b%2 !== 0){
                       answer = a ** 2 + b**2;

    }
    else{
        answer = 2 * (a+b);

    }
    return answer;
}