"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type AudioVisualProps = {
  className?: string;
  variant?: "bars" | "waveform";
};

function useCanvas(variant: NonNullable<AudioVisualProps["variant"]>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;
    let animationFrame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(bounds.width * dpr));
      canvas.height = Math.max(1, Math.floor(bounds.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBars = (width: number, height: number) => {
      const barCount = 48;
      const gap = width / barCount;

      context.clearRect(0, 0, width, height);
      for (let index = 0; index < barCount; index += 1) {
        const envelope = Math.sin((index / (barCount - 1)) * Math.PI);
        const motion =
          0.45 +
          0.28 * Math.sin(frame * 0.026 + index * 0.43) +
          0.12 * Math.sin(frame * 0.011 + index * 0.91);
        const barHeight = Math.max(2, envelope * motion * height * 0.92);
        context.fillStyle = `rgba(20, 125, 125, ${0.25 + envelope * 0.55})`;
        context.fillRect(
          index * gap + gap * 0.2,
          height - barHeight,
          Math.max(1, gap * 0.55),
          barHeight,
        );
      }
    };

    const drawWaveform = (width: number, height: number) => {
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.lineWidth = 1.4;
      context.strokeStyle = "rgba(20, 125, 125, 0.78)";

      for (let x = 0; x <= width; x += 2) {
        const normalized = x / Math.max(width, 1);
        const envelope = Math.pow(Math.sin(normalized * Math.PI), 1.7);
        const y =
          height / 2 +
          Math.sin(x * 0.085 + frame * 0.035) *
            envelope *
            height *
            0.28 +
          Math.sin(x * 0.19 - frame * 0.018) *
            envelope *
            height *
            0.1;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    };

    const render = () => {
      const bounds = canvas.getBoundingClientRect();
      if (variant === "waveform") drawWaveform(bounds.width, bounds.height);
      else drawBars(bounds.width, bounds.height);
      frame += 1;
      if (!reduceMotion) animationFrame = requestAnimationFrame(render);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [variant]);

  return canvasRef;
}

export function AudioVisual({
  className,
  variant = "bars",
}: AudioVisualProps) {
  const canvasRef = useCanvas(variant);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}

export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      elements.forEach((element) => element.setAttribute("data-visible", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

export function PremiumInteractions() {
  const pathname = usePathname();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cleanup: Array<() => void> = [];

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      progressRef.current?.style.setProperty(
        "--page-progress",
        String(progress),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    cleanup.push(() => window.removeEventListener("scroll", updateProgress));

    if (!finePointer || reduceMotion) {
      return () => cleanup.forEach((dispose) => dispose());
    }

    let pointerFrame = 0;
    const updateSpotlight = (event: PointerEvent) => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        spotlightRef.current?.style.setProperty(
          "--spotlight-x",
          `${event.clientX}px`,
        );
        spotlightRef.current?.style.setProperty(
          "--spotlight-y",
          `${event.clientY}px`,
        );
        spotlightRef.current?.setAttribute("data-active", "");
      });
    };
    window.addEventListener("pointermove", updateSpotlight, { passive: true });
    cleanup.push(() => {
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("pointermove", updateSpotlight);
    });

    const magneticElements = document.querySelectorAll<HTMLElement>(
      ".premium-button, .premium-inline-link, .premium-socials a, .premium-site-brand, .premium-contact-links a, .premium-footer nav a, .premium-back-link",
    );

    magneticElements.forEach((element) => {
      const move = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.16;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.16;
        element.style.setProperty("--magnet-x", `${x}px`);
        element.style.setProperty("--magnet-y", `${y}px`);
      };
      const leave = () => {
        element.style.setProperty("--magnet-x", "0px");
        element.style.setProperty("--magnet-y", "0px");
      };

      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", leave);
      element.setAttribute("data-magnetic", "");
      cleanup.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
    });

    const tiltElements = document.querySelectorAll<HTMLElement>(
      ".premium-portrait-frame, .premium-featured-visual, .premium-project-image-wrap, .premium-index-project-visual, .premium-case-visual > div, .premium-work-logo",
    );

    tiltElements.forEach((element) => {
      const move = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
        element.style.setProperty("--tilt-x", `${normalizedX * 7}deg`);
        element.style.setProperty("--tilt-y", `${normalizedY * -7}deg`);
        element.style.setProperty(
          "--shine-x",
          `${50 + normalizedX * 55}%`,
        );
        element.style.setProperty(
          "--shine-y",
          `${50 + normalizedY * 55}%`,
        );
        element.setAttribute("data-tilting", "");
      };
      const leave = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
        element.removeAttribute("data-tilting");
      };

      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", leave);
      element.setAttribute("data-tilt", "");
      cleanup.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
    });

    return () => cleanup.forEach((dispose) => dispose());
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden="true"
        className="premium-cursor-spotlight"
        ref={spotlightRef}
      />
      <span
        aria-hidden="true"
        className="premium-scroll-progress"
        ref={progressRef}
      />
      <span
        aria-hidden="true"
        className="premium-page-reveal"
        key={pathname}
      />
    </>
  );
}
