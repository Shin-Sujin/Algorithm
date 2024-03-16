function solution(s){
    var answer = true;
    let p=0, y = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p++;
        }
        else if(s[i] == 'y' || s[i] == 'Y'){
            y++;
        }
    }
    
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return p === y;
}

// 개수가 같으면 p + y 했을 때 짝수가 나올 것이고, 
// 개수가 다르면 p + y 했을 때 홀수가 나올 것이다
// 나 좀 천재인 듯? ㅋ 