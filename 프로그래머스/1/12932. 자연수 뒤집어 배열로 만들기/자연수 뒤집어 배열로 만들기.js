function solution(n) {
    var answer = [];
    n = String(n);
    // answer = n.split("");    
    // answer.reverse();
    answer = n.split("").reverse().map(Number);

    return answer;
}

// 각 자리의 수를 자리에 집어넣어야 겠네... 
// 이것도 몫과 나머지를 사용해야 하는가?
// split 함수를 사용하고파