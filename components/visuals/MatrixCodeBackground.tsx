'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';

interface MatrixCodeBackgroundProps {
  opacity?: number;
  className?: string;
}

export const MatrixCodeBackground: React.FC<MatrixCodeBackgroundProps> = ({
  opacity,
  className = 'absolute inset-0 pointer-events-none overflow-hidden z-0',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isLight = resolvedTheme === 'light';
    const chars = '01ABCDEF0123456789_#@*&%$<>{}[]/\\~';
    const fontSize = 13;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }

    let frameCount = 0;

    const render = () => {
      frameCount++;
      // Render every 2 frames for smooth, slower movement
      if (frameCount % 2 === 0) {
        ctx.fillStyle = isLight ? 'rgba(247, 249, 246, 0.18)' : 'rgba(5, 7, 5, 0.12)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillStyle = isLight ? '#267747' : '#00FF66';
          ctx.fillText(text, x, y);

          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  const effectiveOpacity = opacity !== undefined ? opacity : resolvedTheme === 'light' ? 0.025 : 0.07;

  return (
    <div className={className} style={{ opacity: effectiveOpacity }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
