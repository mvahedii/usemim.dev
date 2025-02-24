import { useEffect } from "react";
import { usePathname } from "next/navigation";

const animate = () => {
  const animateElements = document.querySelectorAll(".animate");
  animateElements.forEach((element, index) => {
    setTimeout(() => element.classList.add("show"), index * 150);
  });
};

const onScroll = () => {
  document.documentElement.classList.toggle("scrolled", window.scrollY > 0);
};

const scrollToTop = (event: Event) => {
  event?.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const useTheme = () => {
  const pathname = usePathname();

  useEffect(() => {
    onScroll();
    animate();

    const backToTop = document.getElementById("back-to-top");
    backToTop?.addEventListener("click", scrollToTop);

    const backToPrev = document.getElementById("back-to-prev");
    backToPrev?.addEventListener("click", () => window.history.back());

    // Scroll listener
    document.addEventListener("scroll", onScroll);

    // Cleanup function
    return () => {
      backToTop?.removeEventListener("click", scrollToTop);
      backToPrev?.removeEventListener("click", () => window.history.back());
      document.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
};
