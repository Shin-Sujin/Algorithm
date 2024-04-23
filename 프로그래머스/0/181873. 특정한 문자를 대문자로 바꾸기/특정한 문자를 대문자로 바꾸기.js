function solution(my_string, alp) {
    var answer = '';
    let i = 0;
    my_string = my_string.split("");
    for(let alp2 of my_string){
        
        if(alp2 === alp){
            my_string[i] = alp.toUpperCase()
        }
        i++;
    }
    answer =my_string.join("");
    return answer;
}

// 