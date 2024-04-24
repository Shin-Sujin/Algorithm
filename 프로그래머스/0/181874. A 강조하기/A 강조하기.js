function solution(myString) {
    var answer = '';
    myString = myString.split("");
     let i = 0;
    for(let alp of myString){
        if(alp < 'a'){
            myString[i] = myString[i].toLowerCase();
        }
        i++;
    }
    
    answer = myString.join("").replace(/a/g,'A');    
   
    
    return answer;
}