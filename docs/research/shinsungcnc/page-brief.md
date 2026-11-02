# shinsungcnc clone — page brief

Source: https://www.shinsungcnc.com/ (WordPress Blocksy + Elementor, ko-KR)
Local scope: `/`, `/about`, `/case`, `/product`, `/contact`

## Route map
- source `/` → local `/` — src/app/page.tsx
- source `/about/` → local `/about` — src/app/about/page.tsx
- source `/case/` → local `/case` — src/app/case/page.tsx
- source `/product/` → local `/product` — src/app/product/page.tsx
- source `/contact/` → local `/contact` — src/app/contact/page.tsx
- outbound preserved: https://youtu.be/6en0CKlQf5o, mailto:electric5366@naver.com

## Sections (home)
1. Hero dark `#0d1217` + factory image + 4 glass cards (SCADA/HMI, 판넬 제작, 현장 설치, 부속품)
2. 시공 사례 white + 3 image cards + View All → /case
3. Company dark `#111518` + (주)신성이앤에스 Turnkey text
4. 제품 소개 white + 3 cards + View All → /product
5. 제품 사용법 neutral-50 + text + video thumb → YouTube + 구매 문의 → /contact
6. Footer black + address/TEL/FAX/email + copyright

## Assets
- public/sites/shinsungcnc/logo_final.png (header, from uploads)
- ss-47.jpg SCADA, ss-29.jpg 판넬, ss-30.jpg 현장, ss-02.jpg 부스바, ss-10.jpg cable, SS-143, esg-05-scaled.jpg hero, Kakao 특허증
- source URL → local mapping in docs/research/shinsungcnc/pages (home/about/case/product/contact.html)

## Typography/layout
- lang ko, system sans (Geist fallback), headings extrabold, max-w-6xl, 16px header
- Colors: dark #111518, black footer, red-600 accents, neutral grays
- Responsive: 1-col mobile → 2/3-col desktop; SubNav scroll on mobile

## Gaps
- Hero bg is esg-05 factory photo, not original handshake photo (original bg URL not in uploads list)
- Logo recreated with CSS circles, not the exact logo SVG paths
- Contact form is static demo (original requires JS/WordPress backend)
- Sub-detail posts (/2022/05/06/...) out of scope, linked cards go to /case, /product
