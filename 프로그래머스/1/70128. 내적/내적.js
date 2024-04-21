function solution(a, b) {
    var answer = 1234567890;
    a = a.map((num, index) => num * b[index] );
    answer = a.reduce((j, k) => j+k,0);
    return answer;
}


// function solution(a, b) {
//     var answer = 1234567890;
//     a = a.forEach((a, index) => a = a * b[index] );
//     answer = a.reduce((j, k) => j+k,0);
//     return answer;
// }

// a 배열에 a[i] * b[i] 을 저장하고 Reduce 함수로 더하자
// 우선, forEach 메서드는 배열을 변경할 수는 있지만, 이를 새로운 배열로 반환하지 않습니다. 따라서 a = a.forEach(...) 이 부분은 a를 undefined로 만듭니다. 또한, forEach 내부에서 사용된 화살표 함수 (a, index) => a = a * b[index]는 정상적으로 작동하지 않습니다. 이는 매개변수 a가 forEach의 콜백 함수에서 각 요소의 값으로 사용되기 때문에, 이 값을 변경하여도 원본 배열 a에 영향을 주지 않습니다.