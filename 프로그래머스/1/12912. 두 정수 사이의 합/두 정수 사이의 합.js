function solution(a, b) {
    let answer = 0;
    let start, end;

    // a가 b보다 작을 경우
    if (a < b) {
        start = a;
        end = b;
    } else { // b가 a보다 작을 경우
        start = b;
        end = a;
    }

    // start부터 end까지의 모든 정수를 더하여 answer에 누적
    for (let i = start; i <= end; i++) {
        answer += i;
    }

    return answer;
}