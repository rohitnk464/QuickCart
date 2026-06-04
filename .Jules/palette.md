## 2024-05-24 - Accessibility improvements for ProductCard
**Learning:** Visual star ratings need aria-hidden when paired with text ratings, and nested interactive elements need click propagation prevented to avoid unintentional navigation.
**Action:** Add aria-hidden to star rating containers and use onClick={(e) => e.stopPropagation()} on nested interactive elements.
