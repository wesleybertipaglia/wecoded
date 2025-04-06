import confetti, { type Shape } from "canvas-confetti";

export function launchConfetti({
  x = window.innerWidth / 2,
  y = window.innerHeight / 2,
  count = 120,
  angle = 90,
  spread = 90,
  startVelocity = 60,
  gravity = 1,
  colors = [
    "#7df5e9",
    "#7d93f5",
    "#bf7df5",
    "#f57ded",
    "#f57da1",
    "#7df58d",
    "#f5e17d",
    "#f5ad7d",
  ],
  shapes = ["square", "circle"] as Shape[],
}: Partial<{
  x: number;
  y: number;
  count: number;
  angle: number;
  spread: number;
  startVelocity: number;
  gravity: number;
  colors: string[];
  shapes: Shape[];
}> = {}) {
  confetti({
    angle,
    spread,
    startVelocity,
    gravity,
    particleCount: count,
    colors,
    shapes,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight,
    },
  });
}
