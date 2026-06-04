# Palette's Journal

## 2024-05-22 - Nested Interactive Elements in Cards
**Learning:** Placing buttons inside a clickable card (acting as a link) requires careful handling of event propagation and z-indices. The "Stretched Link" pattern (link inside relative container covering it) is a robust solution that keeps the HTML valid (no buttons inside anchors) while maintaining the "whole card is clickable" UX.
**Action:** When making cards clickable, avoid wrapping everything in a `Link`. Instead, use a `Link` with `absolute inset-0` and position interactive buttons above it with higher z-index.

## 2024-05-22 - Inconsistent Feedback for Guest Users
**Learning:** The `addToCart` function only showed toast notifications for logged-in users, leaving guests wondering if their action succeeded.
**Action:** Always ensure feedback mechanisms (toasts, loading states) work for all user states (auth vs guest) unless the action is strictly auth-only.
