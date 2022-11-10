/*
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
*/

function solution(n) { // 입력받은 정수 n
    let answer = 0; // 정수 n의 약수를 모두 더한 값

    for(i=1;i<=n;i++) {
        if(n%i == 0) { // 정수 n / (0-n까지의 수) 의 나머지가 0인 경우
            answer += i; // answer에 i 값을 더함
        }
    }

    return answer;
}