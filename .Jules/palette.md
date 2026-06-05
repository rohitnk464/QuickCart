## 2024-06-25 - Prevent Parent Navigation on Nested Buttons
**Learning:** When interactive elements like "Buy now" or "Wishlist" buttons are placed inside a parent container that is also clickable (e.g., a ProductCard div with an onClick handler that navigates to a details page), clicking the nested buttons will trigger the parent's click event as well. This leads to unintended navigation and a confusing user experience.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to any nested interactive elements within a clickable container to isolate their actions and prevent event bubbling.

## 2024-06-25 - Hiding Redundant Visual Star Ratings
**Learning:** Visual star ratings that are paired with a text-based rating (e.g., "4.5" text next to 5 star images) will result in redundant and confusing screen reader announcements if the images are not properly hidden. Screen readers will read the text, and then potentially read the `alt` text of every single star image.
**Action:** Always hide the container for the visual star images using `aria-hidden="true"` and ensure the individual star images have empty `alt` attributes (`alt=""`). Add a descriptive `aria-label` to the text-based rating to provide a clear, concise announcement (e.g., `aria-label="Rating: 4.5 out of 5 stars"`).
