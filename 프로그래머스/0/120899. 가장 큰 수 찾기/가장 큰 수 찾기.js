function solution(array) {
    var answer = [];
    num1 = array[0];
    for(let i = 0; i<array.length ; i++){
        if(array[i] >= num1){
            num1 = array[i];
            answer = [];
            answer.push(array[i]);
            answer.push(i);
        }
    }
    return answer;
}