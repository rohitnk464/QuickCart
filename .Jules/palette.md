## 2024-06-19 - ProductCard Accessibility Improvements
**Learning:** Found nested interactive elements without stopPropagation and missing ARIA attributes for icon-only buttons and star rating images causing accessibility violations and redundant screen reader announcements.
**Action:** Always ensure nested interactive elements have `stopPropagation`, add `aria-label` to icon-only buttons, use `aria-hidden` and empty `alt` for purely decorative visual elements, and ensure keyboard focus states (`focus-visible:ring-2`) are present.
