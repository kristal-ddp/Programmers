--문제 설명
--PLACES 테이블은 공간 임대 서비스에 등록된 공간의 정보를 담은 테이블입니다. PLACES 테이블의 구조는 다음과 같으며 ID, NAME, HOST_ID는 각각 공간의 아이디, 이름, 공간을 소유한 유저의 아이디를 나타냅니다. ID는 기본키입니다.
--
--NAME	TYPE
--ID	INT
--NAME	VARCHAR
--HOST_ID	INT
--문제
--이 서비스에서는 공간을 둘 이상 등록한 사람을 "헤비 유저"라고 부릅니다. 헤비 유저가 등록한 공간의 정보를 아이디 순으로 조회하는 SQL문을 작성해주세요.

-- Solve1 : WHERE ~ IN
SELECT * FROM PLACES
WHERE HOST_ID IN (
    SELECT HOST_ID FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(HOST_ID) >= 2
)
ORDER BY ID;

-- Solve2 : EXISTS
SELECT * FROM PLACES P1
WHERE EXISTS (
    SELECT 1 FROM PLACES P2
    WHERE P1.HOST_ID = P2.HOST_ID
    GROUP BY HOST_ID
    HAVING COUNT(*) > 1
)
ORDER BY ID;