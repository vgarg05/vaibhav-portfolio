import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../utils/motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id={id} ref={ref} className={`relative z-10 scroll-mt-20 ${className}`}>
      <motion.div className="section-shell" variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}
