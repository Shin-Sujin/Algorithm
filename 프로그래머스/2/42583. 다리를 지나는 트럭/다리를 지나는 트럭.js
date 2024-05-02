function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = [];
    let current_weight = 0;
    let nextTruckIndex = 0; // 대기중인 트럭 인덱스

    while (nextTruckIndex < truck_weights.length || queue.length > 0) {
        time++;

        // 다리를 완전히 건너는 시간이 도래한 트럭이 있다면, 큐에서 제거하고 현재 무게에서 차감
        if (queue.length > 0 && queue[0].endTime === time) {
            current_weight -= queue.shift().weight;
        }

        // 새 트럭을 다리에 올릴 수 있는지 확인
        if (nextTruckIndex < truck_weights.length && current_weight + truck_weights[nextTruckIndex] <= weight) {
            queue.push({
                weight: truck_weights[nextTruckIndex],
                endTime: time + bridge_length // 트럭이 다리를 건너는 데 걸리는 시간 계산
            });
            current_weight += truck_weights[nextTruckIndex];
            nextTruckIndex++;
        }
    }

    return time;
}
