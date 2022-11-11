/*
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
*/

// Solve1
function solution(n) {
    let answer = 0;
    n = n.toString() // n을 문자열로 변환 후

    for(let i=0; i<n.length; i++) {
        answer += parseInt(n[i]) // 각 자리수를 정수로 변환하여 answer에 누적한다
    }

    return answer;
}

// Solve2 : reduce 사용
function solution(n) {
    
    // n을 문자열로 변환 후, split으로 나누고
    // 각 자리수를 정수로 변환하여 acc에 누적한다.
    return (n+"").split("").reduce((answer, element) => answer + parseInt(element), 0);
}