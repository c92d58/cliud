import { useRef, useCallback, useEffect, useState } from "react";

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingVideo({
  src,
  className,
  style,
}: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sources = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacityRef = useRef(0);
  const frameRef = useRef<number>(0);
  const fadingOutRef = useRef(false);

  const fadeIn = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    opacityRef.current = 0;
    el.style.opacity = "0";
    const start = performance.now();
    const dur = 500;

    function step(now: number) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - (1 - t) * (1 - t);
      opacityRef.current = eased;
      if (el) el.style.opacity = String(eased);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    }
    frameRef.current = requestAnimationFrame(step);
  }, []);

  const fadeOut = useCallback(() => {
    const el = videoRef.current;
    if (!el || fadingOutRef.current) return;
    fadingOutRef.current = true;
    const start = performance.now();
    const dur = 550;
    const startOpacity = opacityRef.current;

    function step(now: number) {
      const t = Math.min((now - start) / dur, 1);
      const eased = t * t;
      const val = startOpacity * (1 - eased);
      opacityRef.current = val;
      if (el) el.style.opacity = String(val);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    }
    frameRef.current = requestAnimationFrame(step);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    const remaining = el.duration - el.currentTime;
    if (remaining <= 0.55 && !fadingOutRef.current) {
      fadeOut();
    }
  }, [fadeOut]);

  const handleEnded = useCallback(() => {
    fadingOutRef.current = false;
    if (sources.length === 1) {
      const el = videoRef.current;
      if (el) {
        el.currentTime = 0;
        el.play();
        fadeIn();
      }
    } else {
      const next = (currentIndex + 1) % sources.length;
      setCurrentIndex(next);
    }
  }, [sources.length, currentIndex, fadeIn]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onLoaded = () => fadeIn();
    el.addEventListener("loadeddata", onLoaded);
    return () => el.removeEventListener("loadeddata", onLoaded);
  }, [fadeIn, currentIndex]);

  // Reset fade state when source changes
  useEffect(() => {
    fadingOutRef.current = false;
  }, [currentIndex]);

  return (
    <video
      ref={videoRef}
      key={currentIndex}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      src={sources[currentIndex]}
    />
  );
}
