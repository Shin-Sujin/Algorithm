function solution(a, b) {
    var answer = 0;
    num1 = parseInt(a + '' + b);
    num2 = parseInt(b + '' + a);
    
    return num1>=num2?num1:num2;
}