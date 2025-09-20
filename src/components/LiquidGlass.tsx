"use client"

import { useId, useMemo } from "react"

/**
 * LiquidGlass
 * - Efeito de vidro líquido inspirado no iOS 26
 * - Usa filtro SVG (feTurbulence + feDisplacementMap) animado
 * - Seguro para reutilizar (IDs únicos via useId)
 */
export default function LiquidGlass({
  className = "",
  intensity = 20,
  speed = 12,
}: {
  className?: string
  intensity?: number // deslocamento (px)
  speed?: number // duração da animação (s)
}) {
  const uid = useId().replace(/:/g, "")
  const filterId = useMemo(() => `liquid-filter-${uid}`,[uid])
  const gradientId = useMemo(() => `liquid-gradient-${uid}`,[uid])

  return (
    <div className={"pointer-events-none absolute inset-0 -z-10 " + className} aria-hidden="true">
      {/* SVG filter defs */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="2"
              seed="3"
              result="noise"
            >
              <animate attributeName="baseFrequency" dur={`${speed}s`} values="0.006;0.012;0.006" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={intensity} xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0092cc" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Bolhas/linhas com gradiente, desfocadas e distorcidas pelo filtro */}
        <g filter={`url(#${filterId})`}>
          <ellipse cx="20%" cy="30%" rx="280" ry="140" fill={`url(#${gradientId})`} />
          <ellipse cx="75%" cy="65%" rx="220" ry="110" fill={`url(#${gradientId})`} />
          <ellipse cx="40%" cy="80%" rx="180" ry="90" fill={`url(#${gradientId})`} />
          <rect x="10%" y="10%" width="30%" height="8" rx="4" fill={`url(#${gradientId})`} />
          <rect x="55%" y="20%" width="25%" height="10" rx="5" fill={`url(#${gradientId})`} />
        </g>
      </svg>

      {/* Layer de blur e brilho suave sobreposto para reforçar o glassmorphism */}
      <div className="absolute inset-0 backdrop-blur-2xl -webkit-backdrop-filter blur-0" />
      <div className="absolute inset-0 bg-white/5" />
    </div>
  )
}
