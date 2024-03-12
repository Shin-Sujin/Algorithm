function solution(numbers) {
    var answer = 0;
    let arr = [0,0,0,0,0,0,0,0,0,0];
    
    for(let i = 0; i<10 ; i++){
        for(let j = 0 ; j<numbers.length ; j++){
            if(i == numbers[j]){
                    arr[i] = i;
                
            }
            
        }
    }
    
    for(i = 0; i<10 ; i++){
        if (arr[i] == 0 ){
            answer += i;
        }
    }
    
    return answer;
}

// numbers 에 내가 찾는 정수가 있는지 순회하는 코드가 필요해.
// 정수가 0부터 9까지 있으니까 0부터 9까지 하나하나 순화하자
// 이중 for 문이 필요할 듯?
// 그 배열에 있는 수들을 모두 더한다.