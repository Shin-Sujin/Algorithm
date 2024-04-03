function solution(n) {
    var answer = 0;
    for (let i = 1 ; i<n+1;i++){
        if(n % i === 0){
            answer++;
        }
    }

    return answer;
}

// 약수를 구하는 것과 같네
// 하나가 추가되면 나머지 하나도 자동으로 추가되는 방식
// 1부터 모든 자연수를 순회하는 방식? -> 시간이 너무 오래걸릴 것 같은데..
// 루트씌웠을 때 자연수면 하나 줄일까
