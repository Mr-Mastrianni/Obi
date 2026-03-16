import React from 'react';
import { CowrieState } from '../types';

interface CowrieShellProps {
    state: CowrieState;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    interactive?: boolean;
    className?: string;
    variant?: number;
}

export const CowrieShell: React.FC<CowrieShellProps> = ({
    state,
    onClick,
    size = 'md',
    interactive = false,
    className = '',
    variant = 0
}) => {
    const isMouthUp = state === CowrieState.MouthUp;

    const sizeClasses = {
        sm: { width: 24, height: 32 },
        md: { width: 36, height: 48 },
        lg: { width: 48, height: 64 }
    };

    const dims = sizeClasses[size];

    // Slight rotation variations for natural scatter
    const rotations = [0, 15, -10, 25, -20, 8, -15, 30, -5, 12, -25, 18, -8, 22, -12, 5];
    const rotation = rotations[variant % rotations.length];

    return (
        <button
            onClick={onClick}
            disabled={!interactive}
            className={`
        relative flex items-center justify-center
        transition-all duration-500 ease-in-out
        ${interactive ? 'cursor-pointer hover:scale-110 active:scale-95' : 'cursor-default'}
        ${className}
      `}
            aria-label={isMouthUp ? 'Cowrie shell mouth up (open)' : 'Cowrie shell mouth down (closed)'}
            style={{
                width: dims.width,
                height: dims.height,
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <svg
                viewBox="0 0 36 48"
                width={dims.width}
                height={dims.height}
                xmlns="http://www.w3.org/2000/svg"
            >
                {isMouthUp ? (
                    /* Mouth Up — shows the slit/opening */
                    <>
                        <defs>
                            <radialGradient id={`cowrie-open-grad-${variant}`} cx="50%" cy="40%" r="55%">
                                <stop offset="0%" stopColor="#FFF8E7" />
                                <stop offset="60%" stopColor="#F5E6C8" />
                                <stop offset="100%" stopColor="#D4A574" />
                            </radialGradient>
                            <filter id={`cowrie-shadow-${variant}`}>
                                <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#00000040" />
                            </filter>
                        </defs>
                        {/* Shell body */}
                        <ellipse
                            cx="18" cy="24" rx="14" ry="20"
                            fill={`url(#cowrie-open-grad-${variant})`}
                            stroke="#C8A882"
                            strokeWidth="1"
                            filter={`url(#cowrie-shadow-${variant})`}
                        />
                        {/* Mouth/slit — the serrated opening */}
                        <path
                            d="M 18 8 Q 16 12 17 16 Q 19 20 17 24 Q 15 28 17 32 Q 19 36 18 40"
                            fill="none"
                            stroke="#8B6914"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        {/* Teeth ridges along the slit */}
                        {[12, 16, 20, 24, 28, 32, 36].map((y, i) => (
                            <React.Fragment key={i}>
                                <line
                                    x1={i % 2 === 0 ? "15" : "14.5"} y1={y - 1}
                                    x2="17" y2={y}
                                    stroke="#A0782C" strokeWidth="0.6" strokeLinecap="round"
                                />
                                <line
                                    x1="19" y1={y}
                                    x2={i % 2 === 0 ? "21" : "21.5"} y2={y - 1}
                                    stroke="#A0782C" strokeWidth="0.6" strokeLinecap="round"
                                />
                            </React.Fragment>
                        ))}
                        {/* Subtle highlight */}
                        <ellipse
                            cx="12" cy="18" rx="4" ry="6"
                            fill="white" opacity="0.15"
                        />
                    </>
                ) : (
                    /* Mouth Down — shows the smooth, rounded back */
                    <>
                        <defs>
                            <radialGradient id={`cowrie-closed-grad-${variant}`} cx="45%" cy="35%" r="55%">
                                <stop offset="0%" stopColor="#FFFDF5" />
                                <stop offset="40%" stopColor="#F0E4CC" />
                                <stop offset="100%" stopColor="#C9A96E" />
                            </radialGradient>
                        </defs>
                        {/* Smooth shell back */}
                        <ellipse
                            cx="18" cy="24" rx="14" ry="20"
                            fill={`url(#cowrie-closed-grad-${variant})`}
                            stroke="#BFA06A"
                            strokeWidth="1"
                            filter={`url(#cowrie-shadow-${variant})`}
                        />
                        {/* Natural ridges on the back */}
                        <path
                            d="M 10 14 Q 18 16 26 14"
                            fill="none" stroke="#D4BC8A" strokeWidth="0.5" opacity="0.5"
                        />
                        <path
                            d="M 8 20 Q 18 22 28 20"
                            fill="none" stroke="#D4BC8A" strokeWidth="0.5" opacity="0.4"
                        />
                        <path
                            d="M 8 28 Q 18 30 28 28"
                            fill="none" stroke="#D4BC8A" strokeWidth="0.5" opacity="0.35"
                        />
                        <path
                            d="M 10 34 Q 18 36 26 34"
                            fill="none" stroke="#D4BC8A" strokeWidth="0.5" opacity="0.3"
                        />
                        {/* Highlight */}
                        <ellipse
                            cx="14" cy="18" rx="5" ry="7"
                            fill="white" opacity="0.2"
                        />
                    </>
                )}
            </svg>
        </button>
    );
};