function solution(num_list, n) {
    var answer = 0;
    answer = (num_list.indexOf(n) === -1)?0:1;
    return answer;
}

//indexof 는 요소가 없으면 -1을 반환하는데 
//자스에서 false는 0이니까 -1을 반환받았을때
//falsy 한 값이 아니라 truthy한 값이 된다.
//answer = num_list.indexof(n)?1:0;  
//그래서 이 코드는 틀렸다
