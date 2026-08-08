"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./kenevo-experience.module.css";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  {
    src: "/png kenevo/frame-1.png",
    alt: "Specialized Turbo Kenevo vista lateral",
  },
  {
    src: "/png kenevo/frame-2.png",
    alt: "Specialized Turbo Kenevo em perspectiva traseira",
  },
  {
    src: "/png kenevo/frame-3.png",
    alt: "Specialized Turbo Kenevo em perspectiva dianteira",
  },
] as const;

export default function KenevoExperience() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root.current!);

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const frame1 = q("[data-frame='1']");
          const frame2 = q("[data-frame='2']");
          const frame3 = q("[data-frame='3']");
          const intro = q("[data-scene='intro']");
          const middle = q("[data-scene='middle']");
          const final = q("[data-scene='final']");
          const wordmark = q("[data-wordmark]");
          const progress = q("[data-progress]");

          gsap.set(frame1, { autoAlpha: 1, scale: 0.94, x: 0 });
          gsap.set([frame2, frame3, middle, final], { autoAlpha: 0 });
          gsap.set(frame2, { scale: 0.96, x: -34 });
          gsap.set(frame3, { scale: 0.96, x: 34 });
          gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${Math.round(window.innerHeight * 2.5)}`,
              pin: true,
              scrub: 1.1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .addLabel("intro", 0)
            .to(progress, { scaleY: 1, duration: 10 }, 0)
            .to(frame1, { scale: 1.05, x: 30, y: -10, duration: 2.5 }, 0)
            .to(wordmark, { x: -24, duration: 2.5 }, 0)
            .to(intro, { autoAlpha: 0, y: -18, duration: 0.5 }, 2)
            .addLabel("transition12", 2.5)
            .to(
              frame1,
              { autoAlpha: 0, scale: 1.08, x: 58, duration: 1.5 },
              "transition12",
            )
            .to(
              frame2,
              { autoAlpha: 1, scale: 1, x: 0, duration: 1.5 },
              "transition12",
            )
            .addLabel("frame2", 4)
            .to(middle, { autoAlpha: 1, y: 0, duration: 0.35 }, "frame2")
            .to(frame2, { scale: 1.045, x: -24, duration: 2.5 }, "frame2")
            .to(middle, { autoAlpha: 0, y: -16, duration: 0.4 }, 6.1)
            .addLabel("transition23", 6.5)
            .to(
              frame2,
              { autoAlpha: 0, scale: 1.075, x: -52, duration: 1.5 },
              "transition23",
            )
            .to(
              frame3,
              { autoAlpha: 1, scale: 1, x: 0, duration: 1.5 },
              "transition23",
            )
            .addLabel("frame3", 8)
            .to(frame3, { scale: 1.055, x: 24, duration: 2 }, "frame3")
            .addLabel("final", 8.1)
            .fromTo(
              final,
              { autoAlpha: 0, x: -20 },
              { autoAlpha: 1, x: 0, duration: 0.5 },
              "final",
            );

          return () => timeline.kill();
        },
      );

      return () => mm.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={root}
      className={styles.experience}
      aria-label="Specialized Turbo Kenevo"
    >
      <div className={styles.desktopStage}>
        <div className={styles.ambient} aria-hidden="true" />
        <div data-wordmark className={styles.wordmark} aria-hidden="true">
          KENEVO
        </div>

        <div className={styles.frames}>
          {frames.map((frame, index) => (
            <div
              key={frame.src}
              data-frame={index + 1}
              className={styles.frame}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                priority
                quality={95}
                sizes="(max-width: 1366px) 72vw, (max-width: 1920px) 68vw, 1300px"
              />
            </div>
          ))}
        </div>

        <div data-scene="intro" className={`${styles.copy} ${styles.intro}`}>
          <span>Turbo Kenevo</span>
          <h2>
            Descend
            <br />
            everything.
          </h2>
          <p>Built for the steep.</p>
        </div>
        <div data-scene="middle" className={`${styles.copy} ${styles.middle}`}>
          <span>Built for the steep</span>
          <h2>
            Engineered
            <br />
            to descend.
          </h2>
          <p>Composure when the trail gets rough.</p>
        </div>
        <div data-scene="final" className={`${styles.copy} ${styles.final}`}>
          <span>Kenevo</span>
          <h2>
            Engineered
            <br />
            to descend.
          </h2>
          <p>
            Power for the climb.
            <br />
            Control for the descent.
          </p>
          <Link href="/allproducts" className={styles.cta}>
            Explore Kenevo <b>↗</b>
          </Link>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          Scroll to explore
        </div>
        <div className={styles.progress} aria-hidden="true">
          <i data-progress />
        </div>
        <div className={styles.coordinates} aria-hidden="true">
          ADRN / KNV — 47.5596° N
        </div>
      </div>

      <div className={styles.mobileStory}>
        {frames.map((frame, index) => (
          <article key={frame.src} className={styles.mobileScene}>
            <div className={styles.mobileImage}>
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                priority={index === 0}
                quality={95}
                sizes="(max-width: 1023px) 94vw, 1px"
              />
            </div>
            <div className={styles.mobileCopy}>
              <span>
                {index === 0
                  ? "Turbo Kenevo"
                  : index === 1
                    ? "Built for the steep"
                    : "Kenevo"}
              </span>
              <h2>
                {index === 0 ? "Descend everything." : "Engineered to descend."}
              </h2>
              <p>
                {index === 0
                  ? "Built for the steep."
                  : index === 1
                    ? "Composure when the trail gets rough."
                    : "Power for the climb. Control for the descent."}
              </p>
              {index === 2 && (
                <Link href="/product/17/allproducts" className={styles.cta}>
                  Explore Kenevo <b>↗</b>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
