import { motion, AnimatePresence } from "framer-motion";
import styles from "./MusicCover.module.scss";

interface MusicCoverProps {
  cover: string;
  aria: boolean;
  isPlaying: boolean;
}

export default function MusicCover({
  cover,
  aria,
  isPlaying,
}: MusicCoverProps) {
  return (
    <div className={styles.music_cover} aria-hidden={aria}>
      <AnimatePresence initial={false}>
        <motion.img
          key={cover}
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0)", opacity: 1 }}
          exit={{ filter: "blur(20px)", opacity: 0 }}
          style={{
            scale: `${isPlaying ? 1.15 : 1}`,
          }}
          src={cover}
          alt="track cover"
        />
      </AnimatePresence>
    </div>
  );
}
