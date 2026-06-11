import React, { useRef, useEffect, useState } from "react";
import "./youtube.css";
interface VideoData {
  id: string;
  title?: string;
  subtitle?: string;
}
interface GalleryItemProps {
  videoData: VideoData;
}
const videosData: VideoData[] = [
  { id: "Lb9DHrE1ovw" },
  { id: "1v5Xd-OBCcY" },
  { id: "4KGN3-ku_EY" },
  { id: "WkdnTLbwmhg" },
  { id: "rgRxtWKx6pQ" },
];
const infiniteVideos: VideoData[] = [...videosData, ...videosData];
const GalleryItem: React.FC<GalleryItemProps> = ({ videoData }) => {
  const [title, setTitle] = useState(videoData.title || "Loading...");

  const thumbnailUrl = `https://img.youtube.com/vi/${videoData.id}/hqdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoData.id}`;

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoData.id}&format=json`,
        );

        const data = await response.json();
        setTitle(data.title || "Untitled Video");
      } catch (error) {
        console.error("Error fetching video details:", error);
        setTitle("Video Unavailable");
      }
    };

    fetchVideoDetails();
  }, [videoData.id]);

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-item"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="gallery-item-image"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            `https://img.youtube.com/vi/${videoData.id}/hqdefault.jpg`;
        }}
      />

      <div className="gallery-item-gradient">
        <h3 className="gallery-item-title">{title}</h3>

        <div className="gallery-item-line" />
      </div>

      <div className="gallery-item-overlay">
        <span className="gallery-play-btn" aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default function YouTube() {
  const rowsRef = useRef<HTMLDivElement>(null); 
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const xPosRef = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const lastTouchX = useRef<number>(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const container = rowsRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;
  
    const mq = window.matchMedia("(max-width: 768px)");
    if (!mq.matches) return;
    const SPEED = 0.7; 
    const tick = () => {
      if (!isDragging.current) {
        xPosRef.current -= SPEED;
        
        const half = inner.scrollWidth / 2;
        if (Math.abs(xPosRef.current) >= half) {
          xPosRef.current += half; 
        }
        inner.style.transform = `translateX(${xPosRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
   
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      lastTouchX.current = e.touches[0].clientX;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientX - lastTouchX.current;
      lastTouchX.current = e.touches[0].clientX;
      xPosRef.current += delta;
      const half = inner.scrollWidth / 2;
      if (xPosRef.current > 0) xPosRef.current -= half;
      if (Math.abs(xPosRef.current) >= half) xPosRef.current += half;
      inner.style.transform = `translateX(${xPosRef.current}px)`;
    };
    const onTouchEnd = () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => {
        isDragging.current = false;
      }, 800);
    };
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);
  return (
    <section className="gallery-section overflow-hidden">
      <div className="w-full pt-6 pb-0 max-w-[1920px] mx-auto">
        <div ref={rowsRef} className="gallery-rows-container pt-4 pb-10">
          <div ref={innerRef} className="gallery-motion-container">
            {infiniteVideos.map((video, i) => (
              <GalleryItem key={`vid-${i}`} videoData={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
