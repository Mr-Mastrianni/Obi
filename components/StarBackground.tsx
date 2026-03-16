import React from 'react';

export const StarBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
            {/* Static Stars generated randomly would go here, but using CSS for simplicity in this format */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 animate-pulse"
                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20"
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 2px, transparent 2px)', backgroundSize: '120px 120px', backgroundPosition: '20px 20px' }}>
            </div>
        </div>
    );
};
