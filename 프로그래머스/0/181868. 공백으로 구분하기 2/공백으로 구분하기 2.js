function solution(my_string) {
    var answer = my_string.split(' ').filter(a => a !== '');
    
    return answer;
}

// 공백이 나오면 index++ -> 안되지..
// 문자가 나오면 answer[index]에 + 연산자 사용
// split 도 못쓰고.. 
