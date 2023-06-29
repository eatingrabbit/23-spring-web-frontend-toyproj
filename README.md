# Task Scheduler

소요시간과 데드라인 설정으로 자동으로 시간을 분배해주는 스케쥴러 프로젝트

## 완성된 기능

## Todo List

#### 23.06.28

1. ReadMe 수정 06.30 부분완료

1. 보여줄 시간 시작시간, 보여줄 시간 끝시간 변수로 빼서
   화면에 보이는 시간대 조정하기
   : TimeStandardTextBlock, TimeBlockDiv
   -option 1) overflow-y: scroll + 한칸 크기는 3rem
   -option 2) overflow-y: hidden + 한칸 크기는 시작시간 끝시간 맞춰서 조정
    =>현재 option 1로 구현

1. TimeBlock 색 바꾸기

1. ~TimeStandard border랑 text 분리~ 06.30 완료

1. ~DateTextBlock position: sticky 처리~
+ 06.30 완료

1. TimeBlock 길이가 길어서 dayEndTime을 넘어갈 경우 overflow: hidden 처리

1. ~date-block-item.jsx에서 css 코드 묶어서 정리하기~ 06.28 완료

#### 23.06.30

1. TimeBlock StartTime이 datStartTime을 넘어갈 경우 TimeBlock 가져오는 기준이 StartTime 기준이므로 오류 -> 해결 및 overflow 처리

1. 개발 기록 문서화 시작

1. TimeBlock 길이 너무 짧을 시 텍스트 안보이게 -> 커서 올렸을때 보이게