"use client";

import { useEffect, useRef } from 'react';

export default function SwirlBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  
  useEffect(() => {
    let animationId: number;
    let phase = 0;
    
    const animate = () => {
      if (turbulenceRef.current && canvasRef.current && displacementMapRef.current) {
        // Increase speed by using a larger increment
        phase += 0.01; // Increased from 0.005 for faster movement
        
        // Higher base frequency for more condensed swirls
        const baseFreqX = 0.02; // Doubled from 0.01
        const baseFreqY = 0.02; // Doubled from 0.01
        turbulenceRef.current.setAttribute('baseFrequency', `${baseFreqX} ${baseFreqY}`);
        
        // Animate background position with increased speed
        canvasRef.current.style.backgroundPosition = `${-phase * 30}px ${-phase * 15}px`; // Increased from 20/10
        
        // Keep displacement scale constant
        displacementMapRef.current.setAttribute('scale', '150');
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="swirl-container">
      <canvas ref={canvasRef}></canvas>
      <svg className="swirl-svg">
        <filter id="swirl">
          <feTurbulence
            ref={turbulenceRef}
            baseFrequency="0.1" // Increased for more condensed swirls
            numOctaves="4.1" // Increased from 2 for more detail
            result="turbulence"
            type="fractalNoise"
            seed="5">
          </feTurbulence>
          
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence"
            scale="300"
            xChannelSelector="R" 
            yChannelSelector="G">
          </feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}