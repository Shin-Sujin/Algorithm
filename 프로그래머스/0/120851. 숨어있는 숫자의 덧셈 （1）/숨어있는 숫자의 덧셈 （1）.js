function solution(my_string) {
    var answer = 0;
    answer = my_string.split('').map(Number).filter(num => !isNaN(num)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return answer;
}