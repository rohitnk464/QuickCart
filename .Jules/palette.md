## 2024-03-24 - Visual Star Ratings Announcements
**Learning:** Visual star ratings alongside numeric text ratings cause redundant and confusing screen reader announcements if the stars' image tags have standard alt text (e.g., "star_icon").
**Action:** When a numeric rating exists (like "4.5"), hide the visual star container from screen readers using `aria-hidden="true"` and set the individual star images to `alt=""`.
