# RECELLÉCLORE — 사이트맵 및 URL 이관표 (2026-10-10)

> 공개 검색 결과로 확인된 기존 페이지 및 과거 프로젝트 경로를 바탕으로 작성한 **부분 조사 결과**입니다. 아임웹 sitemap.xml과 robots.txt는 외부 접근 제한으로 직접 검증되지 않았습니다. 완전한 전체 페이지 인벤토리는 아임웹 관리자 메뉴/상품/게시글 내보내기 자료로 재검증이 필요합니다.

| 기존 아임웹 URL | 새 정적 URL | 처리 |
|---|---|---|
| / | / | 메인페이지 |
| /about | /about/ | 브랜드 소개 |
| /28 | /shop/ | 상품 목록 (결제 제거) |
| /best | /shop/ | 상품 목록으로 통합 |
| /shop_view/?idx=182 | /shop/ | 상품 고유 URL은 아직 단일 제품별 복원되지 않음 |
| /lab | /lab/ | 리셀랩 인덱스 |
| /lab/?bmode=view&idx=161453856 | 별도 상세페이지 필요 | 피부가 회복되는 4가지 조건 — 이관 미완료 |
| /lab/?bmode=view&idx=161453470 | 별도 상세페이지 필요 | CTSF 소재 기술 — 이관 미완료 |
| /lab/?bmode=view&idx=161451618 | 별도 상세페이지 필요 | 민감성 피부 3-STEP — 이관 미완료 |
| /32 | /reviews/ | 리뷰 아카이브 |
| /36 | /reviews/ | 외부 블로그 리뷰 아카이브 |
| /35 | /faq/ | Q&A |
| /33 | /contact/ | 협업·사업문의 |
| /31 | /contact/ | 기존 문의 |
| /b2b-supply | /b2b-supply/ | 이전 프로젝트 확인 경로 / 신규 페이지 |
| - | /technology/ | 기술 설명 독립 페이지 |
| - | /group-buy/ | 공동구매 협업 독립 페이지 |

## 제안 주 메뉴
HOME / ABOUT / TECHNOLOGY / PRODUCT / RECELL LAB / REVIEW / Q&A / CONTACT

B2B SUPPLY 및 GROUP BUY는 CONTACT에서 연결하는 보조 랜딩 페이지로 운영합니다.

## 현재 구현 상태
- 정적 페이지 디렉터리 및 SEO sitemap.xml / robots.txt 추가
- 기존 숫자 URL 등은 **브라우저에서 새 페이지로 이동시키는 HTML/JavaScript 방식**을 임시로 적용. 이는 검색엔진용 301 리다이렉트가 아닙니다.
- 제품 사진, 세부 페이지, 리셀랩 원문 및 후기 이미지 미이전
- sitemap.xml의 canonical URL은 **최종 도메인 연결 이후** 유효합니다. 현재 production DNS/아임웹은 변경하지 않았습니다.
- Pages 실제 배포 미진행. main 브랜치 병합 및 GitHub Pages 설정 전까지 새 URL은 공개되지 않습니다.

## 출시 전 필수 작업
1. 아임웹 관리자 전체 메뉴/게시글/상품 데이터 확인 및 고유 URL 수집
2. 이미지 및 원문 이전, 기존 게시글 상세 URL에 대응하는 새 개별 페이지 생성
3. 사업자 정보, 상품 표시 및 개인정보처리방침/이용약관 확인
4. 결제·회원·주문정보 이전 여부 별도 판단 (정적 GitHub Pages는 이를 제공하지 않음)
5. 실제 301 redirect가 필요하면 Cloudflare/Vercel 같은 리다이렉트 지원 레이어 검토
6. DNS 이전 전 링크·모바일·검색엔진·SSL 검수
