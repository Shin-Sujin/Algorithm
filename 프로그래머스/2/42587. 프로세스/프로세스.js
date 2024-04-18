function solution(priorities, location) {
    var answer = 0;
    // 각 항목의 우선순위와 원래 인덱스를 포함하는 큐 생성
    var queue = priorities.map((priority, index) => ({priority, index}));
    
    while (queue.length > 0) {
        // 큐에서 첫 번째 요소를 제거
        let current = queue.shift();
        
        // 현재 요소보다 더 높은 우선순위를 가진 요소가 있는지 확인
        if (queue.some(item => item.priority > current.priority)) {
            // 더 높은 우선순위가 있으면, 현재 요소를 큐의 끝에 다시 넣기
            queue.push(current);
        } else {
            // 그렇지 않으면 이 프로세스 실행 (실행 순서 1 증가)
            answer++;
            // 현재 프로세스의 인덱스가 우리가 찾는 location과 같다면
            if (current.index === location) {
                // 현재의 실행 순서 반환
                return answer;
            }
        }
    }
    
    //return -1; // 이론상 발생하지 않음, 큐는 반드시 비워질 때까지 진행
}