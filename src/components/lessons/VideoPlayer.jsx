import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

/**
 * Responsive 16:9 VideoPlayer component using native HTML5 video.
 * Does not require external video player dependencies.
 */
export function VideoPlayer({ videoUrl, title, onEnded }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md group">
      <video
        ref={videoRef}
        src={videoUrl}
        title={title}
        playsInline
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          if (onEnded) onEnded();
        }}
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Big Play Overlay before video starts */}
      {!hasStarted && !isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer transition-opacity group-hover:bg-slate-950/30"
          role="button"
          tabIndex={0}
          aria-label={`Play lesson video: ${title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              togglePlay();
            }
          }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-108 group-hover:bg-indigo-600 transition-all duration-200">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
          </div>
          <span className="mt-3 text-xs sm:text-sm font-medium text-white/90 drop-shadow-sm">
            Click to start lesson
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
