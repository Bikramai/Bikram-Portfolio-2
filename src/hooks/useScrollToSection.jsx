import { useCallback } from "react";

function useScrollToSection() {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      // Check if the element has a sticky position
      const computedStyle = window.getComputedStyle(section);
      const isSticky = computedStyle.position === "sticky";

      if (isSticky) {
        // Temporarily remove sticky position
        section.style.position = "static";

        // Scroll into view
        section.scrollIntoView({ behavior: "smooth" });

        // Restore the original position after scrolling
        setTimeout(() => {
          section.style.position = "sticky";
        }, 1000); // Adjust timeout as needed for the scroll duration
      } else {
        // Scroll into view directly
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return scrollToSection;
}

export default useScrollToSection;
