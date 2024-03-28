function solution(s) {
    var answer = '';
    var arr = [];
    let max, min;

    arr = s.split(" ").map(Number);
    
    max = arr[0];
    min = arr[0];
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>=max){
            max = arr[i];
        }
        if(arr[i]<=min){
            min = arr[i];
        }
    }
    
    var result = [];
    result.push(min);
    result.push(" ");
    result.push(max);
    
    answer = result.join("").toString();
    
    return answer;
}