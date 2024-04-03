function solution(array, height) {
    //var answer = 0;
    // for(let i = 0; i<array.length ; i++){
    //     if(array[i] > height){
    //         answer++;
    //     }
    // }
    var answer = array.filter((item)=> item > height).length;
    return answer;
}