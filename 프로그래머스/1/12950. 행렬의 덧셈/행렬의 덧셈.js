function solution(arr1, arr2) {
    var answer = [];
    //이중포문..?
    for(let i = 0; i<arr1.length;i++){
                answer[i] = []; // 각 행에 대한 배열을 초기화

        for(let j = 0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    
    return answer;
}

// 제공하신 solution 함수에서 행렬 덧셈을 구현하기 위해 몇 가지 수정이 필요합니다. 현재 구현에서는 answer 배열이 빈 배열로 시작하며, 이 배열에 새로운 값을 할당하려고 할 때 undefined 오류가 발생할 수 있습니다. JavaScript에서는 undefined의 인덱스에 접근하여 값을 할당하려 하면 오류가 발생합니다.

// 따라서, 각 행에 대한 배열을 명시적으로 초기화해야 합니다. 또한, answer 배열의 초기화에 불필요하게 이중 배열이 할당되어 있습니다. 이를 개선하기 위한 코드는 다음과 같습니다: