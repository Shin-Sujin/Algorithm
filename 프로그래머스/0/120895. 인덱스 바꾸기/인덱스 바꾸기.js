function solution(my_string, num1, num2) {
    var answer = '';
    //function swap(num1, num2, temp){
    my_string = my_string.split('');
        let temp = my_string[num1];
        my_string[num1] = my_string[num2];
        my_string[num2] = temp;
    //}
    answer = my_string.join('');
    return answer;
}