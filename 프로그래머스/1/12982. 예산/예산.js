function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    let i = 0;
    
    d = d.sort((a,b) => a - b);
    
    while(sum < budget && i<d.length){
        
        sum += d[i];
        i++;
        answer++;
    }
        
    if(sum > budget){
        answer--;
    }

    return answer;
}