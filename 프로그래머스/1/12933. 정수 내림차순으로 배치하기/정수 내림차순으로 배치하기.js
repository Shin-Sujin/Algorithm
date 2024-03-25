function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function solution(n) {
    var answer = String(n).split("");
    // 선택정렬 알고리즘
    for(let i = 0; i < answer.length - 1; i++){
        for(let j = i + 1; j < answer.length; j++) {
            if(answer[i] < answer[j]){
                swap(answer, i, j);
            }
        }
    }
    return Number(answer.join(""));
}