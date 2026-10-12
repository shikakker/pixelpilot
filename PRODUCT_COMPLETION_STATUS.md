# PRODUCT_COMPLETION_STATUS — PixelPilot

Updated: 2026-10-13
Batch: 7
Product family: **historical PixelPilot aerial photography / Mobirise portfolio**
Canonical repository: `shikakker/PixelPilot` (source files preserved)
Branch: `revive/pixelpilot-2026`; [Draft PR #2](https://github.com/shikakker/PixelPilot/pull/2)
Production booking website: **NOT CLAIMED**; current provider/contact status unknown.
Overall release: **PARTIAL** pending live preview, mobile/browser QA and asset-rights check.

## Current P0/P1 corrections and proof

- **P0 customer-data exposure:** historic `index.html` contained an active form `action="http://pixelpilot.ru"` with name, email, phone, message and an old `data-form-email` token. With no verified modern backend it could submit personal data in plain HTTP to an uncontrolled legacy endpoint.
- **Fix:** removed obsolete form markup and Formoid runtime. Replaced with an explicit noninteractive archive notice: **«Форма заказа отключена: данные не отправляются»**. Changed misleading booking header/CTA copy to accurately describe preservation-only status; retained the gallery, media and document anchors.
- **P1 UX/accessibility:** corrected hardcoded dummy `tel:+1-234-567-8901` to match displayed historical Russian number `tel:+79292708998`, with a warning that its current availability is unverified; set `<html lang="ru">`.
- **Test-first:** `tests/archive-safety.test.mjs` commit `870fe37`, fix `index.html` commit `130ce53`. New `.github/workflows/archive-quality.yml` commit `f78e8fe` runs read-only Node 22 source regressions (no npm dependencies or build required for this static archive).
- **Verification:** exact code-head GitHub Actions `38323070151` **PASS**, archive safety suite **3/3 tests PASS**. HTML blob after fix: `fd1a849c7a461f05f7dc0d73e09ca854eb484de4`. No uploaded personal data, contact submission or production changes.
- **Not verified:** actual browser interactivity, CSS/media at 375/768/1024/1440, third-party Mobirise plugin security, real target phone ownership, aerial media license/permission or hosted Vercel. Production readiness remains PARTIAL.

## T01–T10 — core tasks

| ID | Status | Task / value / verification |
|---|---|---|
| T01 | DONE | Preserve original media, project.mobirise and index.html |
| T02 | DONE | Remove obsolete HTTP PII form and embedded token; CI PASS |
| T03 | DONE | Honest archive-only booking/contact explanation; CI PASS |
| T04 | DONE | Correct phone URI to match displayed historic number; CI PASS |
| T05 | DONE | Identify document language as Russian; CI PASS |
| T06 | DONE | Preserve gallery and form section links; CI PASS |
| T07 | DONE | Add dependency-free Node archive security tests |
| T08 | DONE | Add read-only GitHub Actions tests; exact code head green |
| T09 | IN PROGRESS | Manual keyboard and responsive browser/media inspection |
| T10 | BLOCKED | Shareable linked preview and historical image permissions/ownership |

## I01–I10 — improvements

| ID | Status | Improvement |
|---|---|---|
| I01 | DONE | Remove plain-HTTP personal-data submission |
| I02 | DONE | Remove legacy hidden Formoid form token |
| I03 | DONE | Stop loading obsolete Formoid runtime |
| I04 | DONE | Explicit unavailable-state explanation |
| I05 | DONE | Correct mismatched telephone link and disclaimer |
| I06 | DONE | Screen-reader language metadata |
| I07 | DONE | Regression tests for historical archive scope |
| I08 | DONE | CI contract on every archive branch push and PR |
| I09 | DEFERRED WITH REASON | Mobile gallery/focus audit needs tested hosted preview |
| I10 | DEFERRED WITH REASON | Old Mobirise/third-party scripts need asset audit before public distribution |

## F01–F10 — existing archive capabilities / nonfeatures

| ID | Status | User need / feature |
|---|---|---|
| F01 | EXISTS | Aerial photography service retrospective |
| F02 | EXISTS | City panorama case panels |
| F03 | EXISTS | Orthophoto/cadastral samples |
| F04 | EXISTS | Aerial structural inspection examples |
| F05 | EXISTS | Media gallery and lightbox |
| F06 | EXISTS | Video hero sections |
| F07 | EXISTS | Historical contact information with currency disclaimer |
| F08 | EXISTS | Shareable HTML project artifact |
| F09 | DEFERRED WITH REASON | Verified quote/order submission: no owned backend and no current contact approval |
| F10 | DEFERRED WITH REASON | Live scheduling/payment: historical portfolio does not include a production booking system |

**Next:** verify preview/browser and media rights, then decide whether to publish explicitly as an archival case. No merge/production promotion automatically.
