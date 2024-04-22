function solution(s) {
    var answer = '';
    s = s.split("");
    s = s.sort((a,b) => {
              if(a>b){
        return -1;
    }
    else if(a<b){
        return 1;
    }
    else{
        return 0;
    }}
    );
    answer = s.join("");
    return answer;
    
}

//알파벳에도 sort함수가 적용이 가능한가?