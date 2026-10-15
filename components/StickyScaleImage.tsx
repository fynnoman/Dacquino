"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
  overline?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  reverse?: boolean;
};

export default function StickyScaleImage({
  src,
  alt = "",
  overline,
  title,
  body,
  children,
  reverse = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.12, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.1, 1, 1, 0.6]
  );
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const bgDarken = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.7, 0.45, 0.7]
  );

  return (
    <section
      ref={ref}
      className="relative isolate h-[100vh] w-full overflow-hidden md:h-[110vh]"
    >
      <div
        className="sticky top-0 flex w-full items-center overflow-hidden"
        style={{ height: "100svh" }}
      >
        <motion.div style={{ scale, y }} className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            aria-label={alt}
          />
          <motion.div
            style={{ opacity: bgDarken }}
            className="absolute inset-0 bg-void-950"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void-950/40 via-transparent to-void-950" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-void-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-0 technical-lines opacity-30" />
          <div className="vignette" />
        </motion.div>

        <div className="mx-auto flex w-full max-w-[1440px] items-center safe-x">
          <motion.div
            style={{ y: textY, opacity }}
            className={`w-full max-w-xl ${
              reverse ? "md:ml-auto md:text-right" : ""
            }`}
          >
            {overline && (
              <span className="tape-label red">{overline}</span>
            )}
            <h2 className="d-display text-mega mt-5 text-balance md:mt-7">
              {title}
            </h2>
            {body && (
              <p className="mt-4 text-sm leading-relaxed text-bone-100 sm:text-base md:mt-5 md:text-lg">
                {body}
              </p>
            )}
            {children && <div className="mt-6 md:mt-8">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
