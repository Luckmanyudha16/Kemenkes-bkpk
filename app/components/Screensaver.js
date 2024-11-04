// components/Screensaver.js
'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Screensaver.module.css';

const Screensaver = ({ videoSrc, idleTimeout = 5000 }) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const resetIdleTimer = () => {
      setIsIdle(false); // Reset idle state on user activity
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video to start
      }
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsIdle(true), idleTimeout);
    };

    // Detect various types of user activity
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('mousedown', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    window.addEventListener('touchstart', resetIdleTimer);

    // Initial timer setup
    timeoutRef.current = setTimeout(() => setIsIdle(true), idleTimeout);

    return () => {
      // Cleanup event listeners and timer on unmount
      clearTimeout(timeoutRef.current);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      window.removeEventListener('touchstart', resetIdleTimer);
    };
  }, [idleTimeout]);

  useEffect(() => {
    if (isIdle && videoRef.current) {
      videoRef.current.play();
    }
  }, [isIdle]);

  return (
    <div className={`${styles.screensaver} ${isIdle ? styles.show : ''}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        autoPlay
        playsInline
        muted={false}
        className={styles.video}
      />
    </div>
  );
};

export default Screensaver;
