'use client';

import React from 'react';

const VideoSection = () => {
  return (
    <div className="relative w-full h-[11cm] bg-black overflow-hidden" style={{ marginLeft: '-50vw', marginRight: '-50vw', position: 'relative', left: '50%', right: '50%', width: '100vw' }}>
      <video 
        src="/videos/steam.mp4" 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoSection;