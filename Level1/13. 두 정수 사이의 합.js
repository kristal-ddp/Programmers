/*
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
*/

function solution(a, b) {
    
    // Sovle1
    // let answer = 0;
    // let temp;
    
    // if(a>b) {temp = a; a = b; b = temp;}
    // for(a; a<=b; a++) {
    //     answer += a;
    // }
    
    // return answer;
    
    // Sovle2
    // 등차수열의 합 = 평균 x 개수
    // return (a+b)/2 * (Math.abs(b-a)+1);

    // Solve3
    let answer = 0;
    
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        answer += i;
    }
    
    return answer;
    
}