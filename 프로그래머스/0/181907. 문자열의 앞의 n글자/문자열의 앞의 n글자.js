function solution(my_string, n) {
    var answer = [];
    for(i=0;i<n;i++){
        answer.push(my_string[i]);
    }
    answer = answer.join("");
    return answer;
}