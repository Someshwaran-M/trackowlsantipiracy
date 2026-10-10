import React from "react";

export default function TrackOwlsLogo({
  className = "",
  videoSrc = "/logo-video.mp4",
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <video
        className="h-full w-full object-contain object-left"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}