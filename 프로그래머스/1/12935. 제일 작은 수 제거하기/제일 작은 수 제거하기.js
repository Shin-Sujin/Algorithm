function solution(arr) {
    
    var answer = arr.filter(a => a != Math.min(...arr));
    if(answer.length === 0){
        answer = [-1];
    }
    return answer;
}

//Math/min() 으로 가장 작은 수 찾고
//filter로 거르기
