## 2024-06-25 - Redundant Screen Reader Announcements on Star Ratings
**Learning:** Visual star ratings that are paired with a text-based rating (e.g., "4.5" next to 5 stars) cause redundant and confusing screen reader announcements if the visual elements have alt text like "star_icon".
**Action:** When a visual star rating is paired with a text rating, hide the visual container with `aria-hidden="true"` and set the individual star images to have empty `alt=""` attributes.
