# PixelPilot — modernization plan

The current repository is a static Mobirise-era website (`index.html`, `assets/`, `project.mobirise`) with a duplicate `assets.zip`. Modernization should preserve the historical design while making the site maintainable and portfolio-ready.

## 10 completion tasks

1. Audit `index.html` and all referenced assets for broken or external dependencies.
2. Remove the redundant tracked `assets.zip` after confirming `assets/` is complete.
3. Normalize semantic HTML structure and heading hierarchy.
4. Replace obsolete generated markup/styles only where behavior can be preserved.
5. Improve responsive behavior for current mobile/tablet/desktop widths.
6. Add accessibility fixes: alt text, landmarks, focus states, keyboard navigation, form labels where applicable.
7. Optimize image/font loading and eliminate unused assets.
8. Add modern metadata: title/description, Open Graph, favicon, canonical policy where appropriate.
9. Add automated static checks for links/assets/HTML quality and a simple deployment workflow.
10. Rewrite portfolio documentation around verified site behavior, technology, historical context, and current status.

## Definition of done

The site loads without missing local assets, is usable on current browsers and mobile widths, passes basic accessibility/static checks, and is accurately documented as a maintained historical web project rather than an invented modern SaaS application.