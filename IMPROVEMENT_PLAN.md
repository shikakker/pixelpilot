# Completion plan

1. Reclassify `pixelpilot` from the actual tree: it is a large static/Mobirise-style site bundle with Bootstrap, Formoid, gallery/dropdown assets, extensive drone/aerial imagery and a duplicate `assets.zip`, not evidence of an AI product despite the modern-sounding repository name.
2. Establish the site's actual historical purpose and authorship from HTML/README/content before writing portfolio claims. Preserve the original project/client naming where verified.
3. Audit the `assets.zip` duplicate against unpacked `assets/`; keep one archival master only after confirming equivalence and provenance, and avoid shipping the ZIP in public deployment bundles.
4. Audit all photography/video for ownership and publication rights. The many DJI/aerial images are material assets; do not redistribute or use them as portfolio evidence unless rights are known.
5. Review vendored Bootstrap, Formoid, gallery, carousel and other generated/vendor libraries for versions/licenses. Preserve required notices and clearly distinguish generated/vendor code from authored frontend/design work.
6. Inspect forms and Formoid endpoints for legacy submission services, keys, emails and tracking. Disable dead/uncontrolled form submission in an archival deployment and never collect visitor data through obsolete endpoints.
7. Create a canonical static preview path, fix only verified broken links/assets and capture reference screenshots before cleanup so the original composition is preserved.
8. Improve accessibility/performance non-destructively: semantic headings, alt text where known, keyboard carousel/gallery controls, responsive images/lazy loading and focus states.
9. Add static link/asset validation and a deployment smoke check; avoid framework migration solely to make the repository appear more technical.
10. Rewrite README as verified historical site documentation: purpose/context, generated/static architecture, asset and licensing caveats, preview instructions and exact design/frontend scope represented by the repository.
