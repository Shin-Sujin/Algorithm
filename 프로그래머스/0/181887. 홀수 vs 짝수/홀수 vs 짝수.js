function solution(num_list) {
    var answer = 0;
    let odsum = 0, evsum = 0;
    for(let i = 0;i<num_list.length ; i += 2){
        odsum += num_list[i];
    }
     for(let i = 1;i<num_list.length ; i += 2){
        evsum += num_list[i];
    }
    answer = odsum > evsum ? odsum : evsum;
    
    return answer;
}