function solution(my_string, is_suffix) {
    var answer = 0;
    my_string = my_string.split("").reverse().join("");
    is_suffix = is_suffix.split("").reverse().join("");
    for(let i = 0; i< is_suffix.length ; i++){
        if(my_string[i] !==is_suffix[i] ){
            return 0;
        }
    }
    return 1;
}