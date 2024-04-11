function solution(progresses, speeds) {
    var answer = [];
    var time = [];
    var stack = [];
    var j = 0;
    var i = 0;
    
    for(let k = 0; k < progresses.length; k++){
        time.push(Math.ceil((100 - progresses[k]) / speeds[k]));
    }
    
    j = time[0]; // 첫 번째 작업이 완료되는 일 수로 초기화
    
    while(i < time.length){
        while(time[i] <= j){
            stack.push(time[i]);
            i++;
        }
        answer.push(stack.length);
        j = time[i]; // 다음 작업이 완료되는 일 수로 업데이트
        stack = [];     //스택 초기화
    }
   
    return answer;
}
