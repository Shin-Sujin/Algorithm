function solution(strArr) {
    var answer = [];
    
    for(let i = 0 ; i<strArr.length ; i += 2){
        strArr[i] = strArr[i].toLowerCase();
    }
    for(let i = 1 ; i<strArr.length ; i += 2){
        strArr[i] = strArr[i].toUpperCase();
    }
    
    answer = strArr;
    return answer;
}