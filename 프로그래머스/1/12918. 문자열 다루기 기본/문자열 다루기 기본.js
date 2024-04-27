function solution(s) {
    var answer = true;
    s = s.split("");
    if(s.length !== 4 && s.length !== 6){
        return false;
}
    
    
    for(let i = 0;i<s.length ; i++){
        if (isNaN(Number(s[i]))) {  // 문자가 숫자로 변환되지 않는 경우
            return false;
        }
        
    }
    
    return answer;
}