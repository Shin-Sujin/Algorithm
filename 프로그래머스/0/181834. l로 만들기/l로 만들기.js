function solution(myString) {
    var answer = '';
    for(i=0;i<myString.length;i++)
        {
            if(myString[i].charCodeAt(0) < 'l'.charCodeAt(0)){
                answer  += 'l';
            }
            else{
                            answer += myString[i];

            }

        }
    return answer;
}