import { useState, useEffect, useRef } from "react";
import styles from "./MusicProgressBar.module.scss";

import { motion } from "framer-motion";

interface MusicProgressBarProps {
  trackDuration: number;
  isPlaying: boolean;
}

export default function MusicProgressBar({
  trackDuration,
  isPlaying,
}: MusicProgressBarProps) {
  const [timePassed, setTimePassed] = useState(0);
  const [duration] = useState(trackDuration);

  const formatTimeTrack = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  const trackProgress = `${(timePassed / duration) * 100}%`;

  useEffect(() => {
    if (isPlaying && timePassed < duration) {
      const timer = setInterval(() => {
        setTimePassed(timePassed + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, timePassed, duration]);

  const clickRef = useRef<HTMLDivElement>(null);

  const checkWidth = (e: React.MouseEvent<HTMLDivElement>) => {
    // Specify the type of the event
    if (clickRef.current) {
      // Check if the ref is defined
      const width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const divProgress = (offset / width) * 100;

      setTimePassed(Math.floor((divProgress / 100) * duration));
    }
  };

  return (
    <motion.div
      className={styles.progress_bar_container}
      layout
      initial={{
        opacity: 0.7,
      }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.01 },
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <div className={styles.progress_bar} onClick={checkWidth} ref={clickRef}>
        <div
          className={styles.progress_bar__inner}
          data-move="true"
          style={{
            width: `${trackProgress}`,
          }}
        ></div>
      </div>
      <div className={styles.progress_bar__time}>
        <p>{formatTimeTrack(timePassed)}</p>
        <p>{formatTimeTrack(duration)}</p>
      </div>
    </motion.div>
  );
}
