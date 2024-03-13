function solution(n)
{
    var answer = 0;
     let num = n;    // 나머지를 저장
     let arr = [];      // 몫을 저장하는 배열, 이후에 원소의 합을 구함
    
//     while(n>=1){  
//     if(num >= 100000000){
//         arr.push(num/100000000);    // 몫을 배열에 저장
//         num %= 100000000;           // num에 나머지를 저장
//     }
//     else if(num <100000000 && num >= 10000000 ){
//         arr.push(num/10000000);    // 몫을 배열에 저장
//         num %= 10000000;           // num에 나머지를 저장
//     }
//     else if(num <10000000 && num >= 1000000 ){
//        arr.push(num/1000000);    // 몫을 배열에 저장
//         num %= 1000000;           // num에 나머지를 저장
//     }
//     else if(num <1000000 && num >= 100000 ){
//         arr.push(num/100000);    // 몫을 배열에 저장
//         num %= 100000;           // num에 나머지를 저장
//     }
//     else if(num <100000 && num >= 10000 ){
//         arr.push(num/10000);    // 몫을 배열에 저장
//         num %= 10000;           // num에 나머지를 저장
//     }
//     else if(num <10000 && num >= 1000 ){
//         arr.push(num/1000);    // 몫을 배열에 저장
//         num %= 1000;           // num에 나머지를 저장
//     }
//     else if(num <1000 && num >= 100 ){
//         arr.push(num/100);    // 몫을 배열에 저장
//         num %= 100;           // num에 나머지를 저장
//     }
//     else if(num <100 && num >= 10 ){
//         arr.push(num/10);    // 몫을 배열에 저장
//         num %= 10;           // num에 나머지를 저장
//     }
//     else if(num <10 && num >= 1 ){
//         arr.push(num/1);    // 몫을 배열에 저장
//         num %= 1;           // num에 나머지를 저장
//     }
//     }
    
//     arr
//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')
    
//      for(let i=0 ; i<arr.length;i++){
//         answer += arr[i];
//     }
    
// 위 코드가 실패한 이유 : 자스에서는 '/' 연산을 하면 정수가 아닌 유리수 결과 값을 낳는다.
// 몫과 나머지 이용...
// 987을 100으로 나누면 몫이 9 나머지는 87
// 87을 10을 나누면 몫이 8 나머지는 7
// 1억부터 하나 씩 나누기
// 배열을 만들어서 배열에 몫들을 저장
// 반복문 안에 조건문    
    
     // Math.floor() 함수 : 소수점 이하를 버리는 역할
     // 정수를 10으로 나눈 나머지는 그 수의 1의 자리수를 의미
     while (n > 0) {
        answer += n % 10; // n의 가장 오른쪽 자릿수를 answer에 더합니다.
        n = Math.floor(n / 10); // n을 10으로 나눈 후, 남은 정수 부분을 n에 다시 저장합니다.
    }
    return answer;
}


