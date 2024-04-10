function solution(my_string) {
    var answer = '';
    answer = my_string.split('');
    
    for(let i = 0; i<answer.length; i++){
        if(answer[i].includes('a')){
            answer[i] = answer[i].split('a').join("");
        }
        if(answer[i].includes('e')){
            answer[i] = answer[i].split('e').join("");
        }
        if(answer[i].includes('i')){
            answer[i] = answer[i].split('i').join("");
        }
        if(answer[i].includes('o')){
            answer[i] = answer[i].split('o').join("");
        }
        if(answer[i].includes('u')){
            answer[i] = answer[i].split('u').join("");
        }
        
    }
    
 
    
    return answer.join('');
}