function solution(price, money, count) {
    var answer = -1;
    let needPrice  = 0;
    
    for(let i = 0; i < count ; i++){
        needPrice += price * (i+1);
    }
    
    if(needPrice > money){
    answer = needPrice - money;
    }
    else{
        answer = 0;
    }
    
    
    return answer;
}