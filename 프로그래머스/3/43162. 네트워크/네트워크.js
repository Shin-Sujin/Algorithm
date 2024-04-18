function solution(n, computers) {
    
    // 'visited' 배열을 생성하여 모든 컴퓨터를 방문하지 않은 상태로 초기화
    let visited = new Array(n).fill(false);
    // 네트워크의 수를 담는다.
    let count = 0;
    
    function dfs(index) {
        // 현재 노드를 방문했다는 표시
        visited[index] = true;
        
        //현재 컴퓨터와 다른 컴퓨터들 사이를 하나하나 확인한다!
        for (let j = 0; j < n; j++) {
            // 현재 컴퓨터와 연결 && visited[j]가 false이면,
            // dfs 함수 호출
            if (computers[index][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }
    
    // 모든 컴퓨터에 하나씩 dfs 함수를 호출해서 각 컴퓨터간 연결관계를 확인!
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            // 새로운 네트워크의 시작점을 찾을 때마다 카운트를 증가시킵니다.
            count++;
        }
    }
    
    return count;
}
