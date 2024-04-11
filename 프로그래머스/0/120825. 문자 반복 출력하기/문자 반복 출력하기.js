function solution(my_string, n) {
    let answer = '';
   // my_string = my_string.split('');
    for(let i = 0;i<my_string.length ; i++){
        for(let j = 0 ; j<n ; j++){
            answer += my_string[i];
        }
    }
    return answer;
}
