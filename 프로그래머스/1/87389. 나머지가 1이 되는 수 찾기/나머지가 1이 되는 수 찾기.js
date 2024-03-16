function solution(n) {
    var answer = 0;
    let i = 1;
    while (n%i != 1){   // 나머지가 1이 되면 빠져나온다!
        i++;
    }
    answer = i;
    return answer;
}


// 반복문으로 1부터 나눠가며 나머지가 1이 되면 멈추도록?
// while 반복문 사용하기
// 조건 : n%i != 1;