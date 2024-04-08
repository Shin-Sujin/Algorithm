function solution(array) {
    array = array.sort((b,a) =>a-b);
    return array[parseInt(array.length / 2)];
}