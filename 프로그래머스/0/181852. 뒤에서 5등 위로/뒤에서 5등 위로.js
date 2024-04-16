function solution(num_list) {
    var answer = [];
    num_list = num_list.sort((a,b)=>a-b);
    answer = num_list.slice(-(num_list.length-5));
    return answer;
}