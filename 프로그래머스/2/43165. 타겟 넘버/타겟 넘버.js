function solution(numbers, target) {
    let answer = 0; // 타겟 넘버를 만들 수 있는 방법의 수를 저장할 변수
    const stack = [{index: 0, sum: 0}]; // DFS를 위한 스택을 생성하고, 초기 상태를 추가함
    
    // 스택이 빌 때까지 반복
    while (stack.length > 0) {
        const {index, sum} = stack.pop(); // 스택에서 상태를 하나 꺼냄
        
        // 모든 숫자를 사용한 경우
        if (index === numbers.length) {
            // 타겟 넘버를 만들었을 경우
            if (sum === target) {
                answer++; // 방법의 수를 1 증가시킴
            }
        } else { // 모든 숫자를 아직 사용하지 않은 경우
            // 현재 숫자를 더한 경우를 스택에 추가
            stack.push({index: index + 1, sum: sum + numbers[index]});
            // 현재 숫자를 뺀 경우를 스택에 추가
            stack.push({index: index + 1, sum: sum - numbers[index]});
        }
    }
    
    return answer; 
}
