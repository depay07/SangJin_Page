# Design review

Full visual redesign using the Blueprint whiteprint direction and existing navy brand.

## Preserved

All modified TSX files differ only in className attributes after normalizing line endings. Existing copy, metadata, JSON-LD, image sources, alt text, navigation destinations, form fields, validation, submission endpoint, retries, error handling and handlers are unchanged. No route or component tree was deleted. No pictures or claims were added.

## Verification

- ESLint, TypeScript and production static export.
- All 11 site routes at 320, 768 and 1280 pixels: no horizontal overflow, no broken images, metadata and organization JSON-LD present.
- Mocked inquiry success, three retries with the same request ID, error preserves entered values. No real inquiry was submitted.
- Mobile navigation destinations remain accessible.
- Hero review: 2 findings resolved. Finish review: 3 findings resolved (Korean word wrapping, input border contrast, masthead type).
- Hallmark kept comparison: links 17/17, fields 5/5, handlers 7/7, headings 5/5, figures 5/5 for the recorded home and shared source.

## Deliberate exceptions

The user's verbatim-content instruction takes precedence over Hallmark copy gates. The scanner retains 8 source findings for existing English identifiers and middle-dot punctuation (54/63); none were silently rewritten. Existing footer wording and long copy are retained too. Native Korean typography replaces Latin-only theme faces to avoid network font dependencies.

Inner routes intentionally have short title banners so visitors reach their technical content or inquiry form immediately (44c). Technical subnavigation has a compact rhythm (59). The existing final contact block remains a compact band (77). Default Tailwind palette warnings concern preserved source class names whose rendered appearance is governed by the shared token system. No stand-ins, unfilled slots or new material are required.

The before/after comparison and screenshots remain local in .hallmark/compare.html, .hallmark/before and .hallmark/shots.
