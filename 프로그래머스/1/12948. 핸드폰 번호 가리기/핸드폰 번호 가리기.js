function solution(phone_number) {
    var answer = '';
    let num1 = phone_number.length - 4;
    for(let i = 0;i<num1 ; i++){
        answer += '*';
    }
    for(i = num1;i<num1+4 ; i++){
        answer += phone_number[i];
    }
    return answer;
}