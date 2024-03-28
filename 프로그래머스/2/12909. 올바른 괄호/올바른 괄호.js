function solution(s){
    var answer = true;
    var stack = [];
    
   // 첫 요소가 닫는 괄호면 false
    if(s[0] === ')'){
        answer = false;
    }
    else{
        for(let i = 0 ; i<s.length ; i++){
        
        if(s[i] === '('){
            stack.push(s[i]);
        }
        else if(s[i] === ')'){
            if(stack.length === 0){
                answer = false;
                break;
            }
            else{
                stack.pop();
            }
        }
    }
        
    }
    
//stack의 길이가 0이 아닌 경우 false
	if (answer == true && stack.length !== 0){
answer = false;
}


    return answer;
}

// 여는 괄호이면 push
// 닫는 괄호 나왔을 때 pop 해야함
// 만약 배열에 암것도 없으면 false
// 여는 괄호가 더 많을 경우 : 마지막에 괄호가 배열에 남아있는 경우 false