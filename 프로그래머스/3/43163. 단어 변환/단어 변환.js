function solution(begin, target, words) {
    // target이 words 배열에 포함되지 않으면 변환할 수 없으므로 0을 반환
    if (!words.includes(target)) return 0;

    let queue = [[begin, 0]]; // 큐 초기화, 각 요소는 [현재 단어, 현재 단계 수]
    let visited = [begin]; // 방문한 단어를 추적하기 위한 배열

    while (queue.length) {
        let [current, steps] = queue.shift(); // 큐에서 첫 번째 요소 추출
        
        if (current === target) {
            return steps; // 현재 단어가 target과 같다면 단계 수 반환
        }

        words.forEach(word => {
            // 단어가 방문되지 않았고 현재 단어와 한 글자만 다르면
            if (!visited.includes(word) && isOneLetterDiff(current, word)) {
                visited.push(word); // 방문 배열에 단어 추가
                queue.push([word, steps + 1]); // 큐에 새 단어와 다음 단계 수 추가
            }
        });
    }

    return 0; // 변환할 수 있는 경로가 없다면 0 반환
}

function isOneLetterDiff(word1, word2) {
    let diffCount = 0; // 다른 글자 수 카운트
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diffCount++; // 글자가 다르면 카운트 증가
        if (diffCount > 1) return false; // 다른 글자가 2개 이상이면 false 반환
    }
    return diffCount === 1; // 정확히 1글자만 다르면 true 반환
}
