function solution(num_list) {
    var answer = 0;
    var sum = 0;
    var mul = 1;
    
    for(i=0;i<num_list.length;i++){
        sum += num_list[i];
    }
    sum =  sum * sum
    for(i=0;i<num_list.length;i++){
        mul *= num_list[i];
    }
    answer = sum>mul ? 1 : 0
    return answer;
}