import React from 'react';
import { ShellState } from '../types';

interface CoconutPieceProps {
  state: ShellState;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
  variant?: number; // Determines which organic shape to use (0-3)
}

export const CoconutPiece: React.FC<CoconutPieceProps> = ({ 
  state, 
  onClick, 
  size = 'md',
  interactive = false,
  className = '',
  variant = 0
}) => {
  const isOpen = state === ShellState.Open;
  
  // Organic shapes simulating broken coconut shell fragments (shards)
  const organicShapes = [
    "rounded-[40%_60%_60%_40%/40%_40%_60%_60%]",
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]"
  ];

  // Cycle through shapes based on variant
  const shapeClass = organicShapes[variant % organicShapes.length];
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-28 h-28'
  };

  return (
    <button
      onClick={onClick}
      disabled={!interactive}
      className={`
        ${sizeClasses[size]} 
        ${shapeClass}
        flex items-center justify-center 
        transition-all duration-500 ease-in-out
        ${interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'}
        relative
        shadow-lg
        ${isOpen 
            ? 'bg-[#f8f5f2] border-[3px] border-[#5D4037]' // White meat with brown shell rim
            : 'bg-[#3E2723] border-none' // Dark shell
        }
        overflow-hidden
        ${className}
      `}
      aria-label={isOpen ? "Open coconut piece (White)" : "Closed coconut piece (Dark)"}
      style={{
        boxShadow: isOpen 
            ? 'inset 0 0 15px rgba(0,0,0,0.05), 2px 4px 8px rgba(0,0,0,0.3)' 
            : 'inset -2px -2px 8px rgba(0,0,0,0.6), inset 2px 2px 8px rgba(255,255,255,0.05), 2px 4px 10px rgba(0,0,0,0.5)'
      }}
    >
      {/* Shell Texture (for closed) */}
      {!isOpen && (
          <div className="absolute inset-0 opacity-40" 
               style={{ 
                   backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 20%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 12px)',
                   backgroundSize: 'cover'
               }} 
          />
      )}

      {/* Meat Texture (for open) - Subtle grain */}
      {isOpen && (
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiLz4KPC9zdmc+')] bg-repeat" />
      )}
    </button>
  );
};