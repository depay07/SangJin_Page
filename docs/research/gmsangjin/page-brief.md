# 지엠상진 홈페이지 — 구성 기록

Source: `D:\00. 업체자료\45. 지엠상진\회사 소개서(지엠).pptx` (30슬라이드)
원본 이미지: `public/sites/gmsangjin/slides/` 56개 추출 (ppt/media → 이름 매핑)
실로고: `slides/logo-small.png` (표지 GLOBAL MECHATRONICS 로고)

## Routes (10, 소개서 목차 그대로)
- `/` 홈 — 랜딩 전용 (히어로+3대사업+바로가기+CTA, 챕터 내용 중복 없음)
- `/greeting` 인사말 — 전문 + 부스 사진
- `/about` 회사현황 — 현황표 + 플랜트 조감도
- `/vision` 경영비전 — 3키워드 + 5목표
- `/org` 회사조직 — 대표이사 + 3부문 10팀
- `/factory` 공장 및 장비 — 시흥 본사 실사진
- `/business` 도장설비 — 계통 조감도 + 7부문(실사진) + 공정/분류 설명
- `/dacro` DACRO 표면처리 — 4부문(실사진) + 현장사진 6종
- `/references` 시공실적 — 지명원 4표 42행
- `/contact` 고객문의 — 본사 주소/전화 + 관심분야 선택 폼(데모용)

## Nav
- 홈 / 회사소개(드롭다운 5) / 사업분야(드롭다운 2) / 시공실적 / 고객문의
- 구 `/case`·`/product` 삭제 → `/references`·`/business`로 교체
