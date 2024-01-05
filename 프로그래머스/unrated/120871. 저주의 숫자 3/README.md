# [level unrated] 저주의 숫자 3 - 120871

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120871)

### 성능 요약

메모리: 33.4 MB, 시간: 0.11 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 1월 5일 9:39:11

### 문제 설명

<p>3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.</p>
<table class="table">
        <thead><tr>
<th>10진법</th>
<th>3x 마을에서 쓰는 숫자</th>
<th>10진법</th>
<th>3x 마을에서 쓰는 숫자</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>1</td>
<td>6</td>
<td>8</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>7</td>
<td>10</td>
</tr>
<tr>
<td>3</td>
<td>4</td>
<td>8</td>
<td>11</td>
</tr>
<tr>
<td>4</td>
<td>5</td>
<td>9</td>
<td>14</td>
</tr>
<tr>
<td>5</td>
<td>7</td>
<td>10</td>
<td>16</td>
</tr>
</tbody>
      </table>
<p>정수 <code>n</code>이 매개변수로 주어질 때, <code>n</code>을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>15</td>
<td>25</td>
</tr>
<tr>
<td>40</td>
<td>76</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>15를 3x 마을의 숫자로 변환하면 25입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>40을 3x 마을의 숫자로 변환하면 76입니다.</li>
</ul>

#### 회고

        1. for 문을 넣을 때 조건을 잘 생각해서 넣기.
        let i = 1; ; i++와 let i = 1; i <= n; i++ 의 차이를 잘 생각하기
        처음에는 let i = 1; i <= n; i++ 이러한 조건을 넣었을 때 중간에 몇번 통과되다가 실패가 뜨기에 검색을 해봤더니 반복문의 종료차이라고 나왔다.
        이미 밑에서 count의 종료문을 작성했었기 때문에 종료문이 2중으로 적용되면서 오류가 생긴 듯하다.
        다음부터는 위에 종료문을 넣어서 좀 더 간결한 코드를 목표로 작성하는 걸로.
        2. .includes('3')에 관한 부분
        includes는 배열이나 문자열에 적용되는 메소드이기 때문에 처음에 Number.includes(3)이라는 말도 안되는 식을 짠듯하다.
        String.includes('3')으로 수정하니 오류가 없이 잘 됐다.
        메소드에 관한 주의점을 어느정도 알아두기!!

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
