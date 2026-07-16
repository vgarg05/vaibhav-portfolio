import { useEffect, useState } from "react";
import { navItems } from "../data/portfolio";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers = navItems.map(([id]) => {
      const target = document.getElementById(id);
      if (!target) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
      );

      observer.observe(target);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return activeSection;
}
