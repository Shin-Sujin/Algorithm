function solution(my_string) {
    var answer = '';
    
    my_string = my_string.split('');
    
    for(let i = 0; i<my_string.length ; i++){
        if(my_string[i] >= 'A' && my_string[i] <= 'Z'){
            my_string[i] = my_string[i].toLowerCase();
        }else{
            my_string[i] = my_string[i].toUpperCase();
            
        }
    }
    answer = my_string.join('');
    return answer;
}