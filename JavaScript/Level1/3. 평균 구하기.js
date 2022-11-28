/*
문제 설명
정수를 담고 있는 배열 array의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
array은 길이 1 이상, 100 이하인 배열입니다.
array의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

// Solve1 : for문 사용
// function solution(array) {
//     let acc = 0;

//     for(let i=0; i<array.length; i++) {
//         acc += array[i];
//     }

//     return acc / array.length;
// }


// Solve2 : array.reduce 사용
function solution(array) {
    return array.reduce((acc, element) => acc + element) / array.length;
}

console.log(10 % 3)
console.log(10 / 3)