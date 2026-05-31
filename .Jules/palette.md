
## 2023-10-27 - Hidden Semantic Information in Clickable Containers
**Learning:** When developing card components (like ProductCard) that are fully clickable using an outer container onClick handler, adding nested interactive elements (like Wishlist or Buy buttons) requires `e.stopPropagation()`. Furthermore, visual indicators like 5-star rating visual arrays create extreme redundancy for screen reader users when a text rating ("4.5") is already provided alongside them.
**Action:** When working on visual star ratings, always verify if a text equivalent exists in the same container. If it does, strictly hide the visual array using `aria-hidden="true"` on the parent layout element rather than attempting to add complex logic to individual star SVGs/Images.
