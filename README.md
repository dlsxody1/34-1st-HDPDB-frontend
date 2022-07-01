# HDPDB (Hey Dj Pumkin Drop the Beat)

## 팀구성

### 프론트 엔드(3명)

- 김인태 , 백광현, 이후경

## 구현 사이트

- https://drop.com/

## 기간 : 22.06.20 - 22.06.30

- 프론트엔드 깃헙주소

https://github.com/wecode-bootcamp-korea/34-1st-HDPDB-frontend

- 백엔드 깃헙주소

https://github.com/wecode-bootcamp-korea/34-1st-HDPDB-backend

- Notion 프로젝트 소개

https://www.notion.so/xannyus/HDPDB-febadee65bf045c696606d62e29767c0

### 필수 구현 사항

:: SHOP 기준으로 프로젝트 진행

1. 회원가입 (o)
2. 로그인 (o)
3. 상품 리스트 페이지
   - 필터링 기능 추가 (x)
   - 정렬 기능 추가 (x)
4. 상품 상세 페이지
   - 캐러셀 (라이브러리 사용 X) (o)
   - 상품 상세 정보 (Overview, Detail) 데이터 최소화해서 작업 (o)
5. 장바구니 기능
   - 장바구니 추가 (o)
   - 장바구니 조회 (o)
   - 장바구니 수정 (o)
   - 장바구니 삭제 (o)

### 추가 구현 사항

6. 리뷰 기능
   - 리뷰 생성 기능 (별점 추가)
   - 리뷰 조회 기능
   - 리뷰 검색 기능
   - 리뷰 정렬 기능
7. 상품 주문
8. 커뮤니티 기능 추가
9. 관리자와 채팅

## 메인 레이아웃 (Footer 부분)

![head](https://user-images.githubusercontent.com/97820540/176838926-9007e089-a929-4dd7-93af-ef070c9faa50.gif)

- map함수를 사용해서 반복하는 것을 연습하기 위해서 footer의 value들을 mockdata로 만들었습니다.


## 상세페이지 (캐러셀 및 옵션 선택)

![detail](https://user-images.githubusercontent.com/97820540/176838958-a65e3782-40bd-4ab3-a2ce-215955e505fc.gif)

- [캐러셀 구현] mainCarousel, subCarousel의 ul에 큰 width를 state로 주고, li에 transform: `translateX(${subCarousel}px`를 줘서 click 했을 때 state가 변하는 방식으로 구현하였습니다.
- [옵션 선택 버튼] key Case, Color에 각각 다른 state를 설정했고, option 버튼을 클릭했을 떄 그 value가 변할 수 있게 state를 설정했습니다. 또한 inline style로 선택한 button을 알 수 있게 border값을 state로 주었습니다.


## 부족했던 부분이나 보완해야 할 점

- 프론트앤드 개발자끼리 처음에 컨벤션을 구체적으로 설정하지않고 개발을 시작한 점이 아쉬웠습니다.
- 이미지가 png 파일이어서 hover 이벤트를 주었을 때 색상이 맘에 들지 않았습니다.
- 백엔드에게 제가 필요한 것을 구체적으로 요구하지 못했던 점이 아쉬웠습니다.
- 그로 인해 서버를 이용해서 통신하는 것을 실패했기 떄문에 mockdata로만 파일을 구성한 점이 아쉬웠습니다.
- 비슷한 구조의 state를 하나로 합치지 못해 효율적인 state운영을 못한 것이 아쉽습니다.
