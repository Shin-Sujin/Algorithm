function solution(num_str) {
    var answer = 0;
    num_str.toString().split('').forEach(v => answer += Number(v));
    
    return answer;
}