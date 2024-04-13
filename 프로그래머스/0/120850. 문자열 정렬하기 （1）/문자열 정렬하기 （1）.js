function solution(my_string) {
    var answer = [];
    
    my_string = my_string.split('');
    my_string = my_string.map(Number);
    
    answer = my_string.filter(num => !isNaN(num));
    
    answer.sort((a,b) => a-b);
    return answer;
}