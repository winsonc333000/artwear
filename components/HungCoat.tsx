"use client";

import { useEffect, useRef } from "react";

const LOUPE = 190; // loupe diameter, px
const ZOOM = 2.2; // magnification over the on-screen size
const NATURAL_W = 896;
const NATURAL_H = 1120;

// The coat hangs on a hook. Brushing past it with the mouse gives it a push that scales
// with how fast the pointer was moving, and it swings out on a damped pendulum (driven per
// frame, so the motion is continuous). While the pointer is over it, a loupe magnifies the
// cloth so the paint and wear can be read up close.
export function HungCoat({ src, alt }: { src: string; alt: string }) {
  const figRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const loupeRef = useRef<HTMLDivElement>(null);
  const loupeImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const fig = figRef.current!;
    const img = imgRef.current!;
    const loupe = loupeRef.current!;
    const loupeImg = loupeImgRef.current!;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pendulum state (degrees, degrees/s).
    let angle = 0;
    let vel = 0;
    let raf = 0;
    let last = 0;
    // Pointer state.
    let px = 0;
    let py = 0;
    let lastMoveX = 0;
    let lastMoveT = 0;
    let pointerVX = 0; // px/ms, smoothed
    let over = false;

    const STIFF = 38; // spring toward hanging straight
    const DAMP = 2.1; // air and friction
    const MAX = 3.2; // degrees

    function tick(t: number) {
      const dt = Math.min(0.032, (t - last) / 1000 || 0.016);
      last = t;
      vel += (-STIFF * angle - DAMP * vel) * dt;
      angle += vel * dt;
      angle = Math.max(-MAX, Math.min(MAX, angle));
      fig.style.rotate = `${angle.toFixed(3)}deg`;
      if (over) placeLoupe();
      const resting = Math.abs(angle) < 0.004 && Math.abs(vel) < 0.01;
      if (resting && !over) {
        angle = 0;
        vel = 0;
        fig.style.rotate = "";
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    }
    function run() {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    }

    function placeLoupe() {
      // The image is drawn object-fit: contain inside its (scaled, slightly rotated) box.
      const r = img.getBoundingClientRect();
      const s = Math.min(r.width / NATURAL_W, r.height / NATURAL_H);
      const dw = NATURAL_W * s;
      const dh = NATURAL_H * s;
      const ox = r.left + (r.width - dw) / 2;
      const oy = r.top + (r.height - dh) / 2;
      const fx = (px - ox) / dw; // 0..1 across the photo
      const fy = (py - oy) / dh;
      loupe.style.transform = `translate3d(${px - LOUPE / 2}px, ${py - LOUPE / 2}px, 0)`;
      loupeImg.style.width = `${dw * ZOOM}px`;
      loupeImg.style.height = `${dh * ZOOM}px`;
      loupeImg.style.transform = `translate3d(${LOUPE / 2 - fx * dw * ZOOM}px, ${LOUPE / 2 - fy * dh * ZOOM}px, 0)`;
    }

    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      const now = performance.now();
      const dtm = Math.max(1, now - lastMoveT);
      const v = (e.clientX - lastMoveX) / dtm;
      pointerVX = now - lastMoveT > 120 ? v : pointerVX * 0.6 + v * 0.4;
      lastMoveX = e.clientX;
      lastMoveT = now;
      px = e.clientX;
      py = e.clientY;
      if (over) {
        placeLoupe();
        run();
      }
    }

    function onEnter(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      over = true;
      px = e.clientX;
      py = e.clientY;
      placeLoupe();
      loupe.classList.add("is-on");
      if (!still) {
        // Push in the direction the pointer was travelling; faster brush, bigger swing.
        const push = Math.max(-1, Math.min(1, pointerVX / 1.2));
        const dir = Math.abs(push) > 0.05 ? push : px < fig.getBoundingClientRect().left + fig.offsetWidth / 2 ? 0.35 : -0.35;
        vel += dir * 14;
      }
      run();
    }

    function onLeave() {
      over = false;
      loupe.classList.remove("is-on");
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    fig.addEventListener("pointerenter", onEnter);
    fig.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      fig.removeEventListener("pointerenter", onEnter);
      fig.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <figure ref={figRef} className="hung">
        <img ref={imgRef} src={src} alt={alt} width={NATURAL_W} height={NATURAL_H} fetchPriority="high" />
      </figure>
      <div ref={loupeRef} className="loupe" aria-hidden="true">
        <img ref={loupeImgRef} src={src} alt="" />
      </div>
    </>
  );
}
