"use client";

import { useEffect, useRef } from "react";

const chars =
  "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/$#@%&*+=-";

const rainColors = [
  "rgba(34,211,238,0.92)",
  "rgba(96,165,250,0.92)",
  "rgba(168,85,247,0.88)",
  "rgba(74,222,128,0.9)",
  "rgba(244,114,182,0.86)"
];

const techWords = [
  "Databricks",
  "Snowflake",
  "AWS",
  "Lakehouse",
  "Spark",
  "Kafka",
  "ML Pipelines",
  "Governance",
  "Terraform",
  "Delta",
  "Analytics",
  "Streaming",
  "Unity Catalog",
  "Gold Layer",
  "Bronze Layer",
  "Silver Layer",
  "Jenkins",
  "Unity Catalog",
  "AWS Glue Catalog",
  "ETL",
  "AI/ML",
  "Data Lake",
  "Data Warehouse",
  "Delta Live Tables",
  "EMR",
  "Glue"
];

type FloatingWord = {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  color: string;
  size: number;
};

export function LiveCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    let wordTick = 0;

    const floatingWords: FloatingWord[] = Array.from({ length: 20 }).map((_, i) => ({
      text: techWords[i % techWords.length],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: reduceMotion ? 0.01 : 0.01 + Math.random() * 0.08,
      opacity: 0.08 + Math.random() * 0.08,
      color: rainColors[i % rainColors.length],
      size: window.innerWidth < 640 ? 12 : 14
    }));

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 640 ? 12 : 15;

      columns = Math.floor(width / fontSize);

      drops = Array(columns)
        .fill(0)
        .map(() => Math.random() * -120);
    };

    const drawMatrixRain = () => {
      ctx.save();
      ctx.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";
      ctx.shadowBlur = 8;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const color = rainColors[i % rainColors.length];

        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255,255,255,0.96)";
        ctx.fillText(text, x, y - 1);
        ctx.shadowBlur = 8;

        if (y > height && Math.random() > 0.988) {
          drops[i] = Math.random() * -30;
        }

        drops[i] += reduceMotion ? 0.007 : 0.018;
      }

      ctx.restore();
    };

    const drawFloatingWords = () => {
      ctx.save();
      ctx.textBaseline = "top";

      floatingWords.forEach((word, index) => {
        ctx.font = `${word.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        const alpha = word.opacity + Math.sin((wordTick + index * 30) * 0.02) * 0.02;
        const color = word.color.replace(/0\.\d+\)/, `${Math.max(0.04, alpha)})`);
        ctx.fillStyle = color;
        ctx.fillText(word.text, word.x, word.y);

        word.y += word.speed;
        word.x += Math.sin((wordTick + index * 12) * 0.01) * 0.08;

        if (word.y > height + 40) {
          word.y = -30 - Math.random() * 100;
          word.x = Math.random() * width;
          word.text = techWords[Math.floor(Math.random() * techWords.length)];
        }
      });

      ctx.restore();
    };

    const draw = () => {
      wordTick += 1;

      ctx.fillStyle = "rgba(2, 6, 23, 0.12)";
      ctx.fillRect(0, 0, width, height);

      drawMatrixRain();
      drawFloatingWords();

      const glow1 = ctx.createRadialGradient(width * 0.2, height * 0.15, 0, width * 0.2, height * 0.15, 220);
      glow1.addColorStop(0, "rgba(34,211,238,0.05)");
      glow1.addColorStop(1, "rgba(34,211,238,0)");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(width * 0.8, height * 0.22, 0, width * 0.8, height * 0.22, 260);
      glow2.addColorStop(0, "rgba(168,85,247,0.04)");
      glow2.addColorStop(1, "rgba(168,85,247,0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const onResize = () => {
      setup();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 -z-20 opacity-100"
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.05),transparent_18%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.05),transparent_20%),linear-gradient(to_bottom,rgba(2,6,23,0.10),rgba(2,6,23,0.75))]" />
    </>
  );
}
