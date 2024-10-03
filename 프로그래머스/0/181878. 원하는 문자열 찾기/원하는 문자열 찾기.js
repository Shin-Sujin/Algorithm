function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    return myString.includes(pat)?1:0;
}

//우선 둘 다 싹 다 소문자로 바꿔버리자