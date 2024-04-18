function solution(arr) {
    var answer = [];
    let j = 0;
    for (let i =0;i<arr.length;i++){
        while(j<arr[i]){
            answer.push(arr[i]);
            j++;
        }
            j = 0;
    }
    //answer = answer.split("");
    return answer;
}