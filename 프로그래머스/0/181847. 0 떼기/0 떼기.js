function solution(n_str) {
    var answer = '';
    let i;
    for(i=0;i<n_str.length;i++){
        if(n_str[i]!=='0'){
            break;
        }
    }
    answer = n_str.slice(i);
    return answer;
}