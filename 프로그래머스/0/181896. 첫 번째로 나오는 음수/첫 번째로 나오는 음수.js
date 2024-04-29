function solution(num_list) {
    var answer = 0;
    for(let num of num_list){
        if(num<0){
            return num_list.indexOf(num);
        }
    }
    return -1;
    return answer;
}