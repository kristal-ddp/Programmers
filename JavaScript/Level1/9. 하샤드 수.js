/*
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
*/

function solution(x) {
    
    // 양의 정수 x의 자릿수를 구하고 (x를 문자열로 변환하고 split으로 나눈다)
    // 자릿수의 합을 구한다 (reduce로 각 자리수를 누적시킨다)
    // const sum = (x+"").split("").reduce((acc, element) => acc + parseInt(element), 0); // 방법1
    const sum = (x+"").split("").reduce((acc, element) => +acc + +element); // 방법2
    
    // 만약 x / sum 의 나머지가 0이면 true, 0이 아니면 false를 반환한다
    return x % sum === 0 ? true : false;
}