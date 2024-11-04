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
      videoRef.current.play().catch(error => console.error("Error attempting to play the video:", error));
    }
  }, [isIdle]);

  useEffect(() => {
    const handleVideoEnd = () => {
      // Restart video if it stops unexpectedly
      if (videoRef.current && isIdle) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(error => console.error("Error attempting to replay the video:", error));
      }
    };

    // Listen for 'ended' event to make sure video loops if it stops
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      // Cleanup event listener on unmount
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [isIdle]);

  return (
    <div 
      className={`${styles.screensaver} ${isIdle ? styles.show : ''}`}
      onClick={() => setIsIdle(false)} // Reset idle state on click
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          playsInline
          className={styles.video}
        />
      ) : (
        <p>No video source available.</p> // Fallback content if no videoSrc is provided
      )}
    </div>
  );
};

export default Screensaver;
