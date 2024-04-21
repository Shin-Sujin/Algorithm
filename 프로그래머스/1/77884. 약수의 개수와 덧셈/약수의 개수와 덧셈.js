function solution(left, right) {
    var answer = 0;
    let num = 0;
    for(let i = left ; i<=right ; i++){
        for(let j = 1;j<i+1;j++){
            if(i % j === 0){
                num++;
            }
        }
        if(num % 2 === 0){
            answer += i;
        }
        else{
            answer -= i;
        }
        num = 0;
    }
    return answer;
// 와.. 약수의 개수 세는 공식이 뭐였더라
// 있었는데... 
// 1부터 다 나눠봤나..?? -> 이게 맞는듯!
// 약수의 개수를 다 세고 
// 이중 for문.... ㅠ
}
