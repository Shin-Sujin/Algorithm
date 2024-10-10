function gcd(a, b) {
  // 유클리드 호제법을 사용하여 최대공약수 계산
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // 최소공배수는 두 수의 곱을 최대공약수로 나눈 값
  return (a * b) / gcd(a, b);
}

function solution(a, b) {
  let greatestCommonDivisor = gcd(a, b);
  let leastCommonMultiple = lcm(a, b);
  return [greatestCommonDivisor, leastCommonMultiple];
}

