function solution(numbers) {
    var answer = 0;
   numbers = numbers.sort((a,b) => b-a);
    let num1 = numbers[0] * numbers[1];
    let num2 = numbers[numbers.length -1] * numbers[numbers.length -2];
    
    if(num1 > num2){
        answer = num1;
    }
    else{
        answer = num2;
    }
    
    return answer;
}