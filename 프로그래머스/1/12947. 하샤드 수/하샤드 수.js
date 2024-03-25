function solution(x) {
    var answer = true;
    var arr = x.toString().split("");
    arr = arr.map(Number);
    let sum = 0;
    for(let i = 0; i<arr.length ; i++){
        sum += arr[i];
    }
    if(x % sum === 0)
        answer = true;
    else
        answer = false;
    return answer;
}