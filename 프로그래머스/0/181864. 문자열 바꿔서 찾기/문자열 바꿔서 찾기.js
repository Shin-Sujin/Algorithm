function solution(myString, pat) {
    var answer = 0;

    myString = myString.split("");
    
    for(let i =0;i<myString.length;i++){
        if(myString[i] == 'A'){
            myString[i] = 'B';
        }
        else{
            myString[i] = 'A';
        }
    }
    myString = myString.join("");
    
    
    answer = myString.includes(pat)? 1 : 0;
    return answer;
}