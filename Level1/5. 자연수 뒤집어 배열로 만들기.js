/*
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
*/

function solution(n) {
    
    // 자연수 n → String → split : 하나씩 자름 → reverse : 거꾸로
    // map(Number) : String인 배열의 각 요소를 숫자로 형변환
    return String(n).split("").reverse().map((data) => Number(data));
}