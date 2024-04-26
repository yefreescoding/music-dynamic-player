import { motion, Variants } from "framer-motion";

import styles from "./MusicUlist.module.scss";

import cover from "/covers/music-cover.jpg";
import Heart from "../icons/Heart";

interface MusicUlistProps {
  aria: boolean;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export default function MusicUlist({ aria }: MusicUlistProps) {
  return (
    <motion.ul
      className={styles.music_card__ul}
      aria-hidden={aria}
      animate={aria ? "open" : "closed"}
      variants={{
        open: {
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.5,
            staggerChildren: 0.07,
          },
        },
        closed: {
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
    >
      <motion.li className={styles.music_card__li} variants={itemVariants}>
        <div className={styles.music_card__cover_li}>
          <img src={cover} alt="" />
        </div>
        <div>
          <h3>Song title</h3>
          <p>Song artists</p>
        </div>
        <Heart />
      </motion.li>
      <motion.li className={styles.music_card__li} variants={itemVariants}>
        <div className={styles.music_card__cover_li}>
          <img src={cover} alt="" />
        </div>
        <div>
          <h3>Song title</h3>
          <p>Song artists</p>
        </div>
        <Heart />
      </motion.li>
      <motion.li className={styles.music_card__li} variants={itemVariants}>
        <div className={styles.music_card__cover_li}>
          <img src={cover} alt="" />
        </div>
        <div>
          <h3>Song title</h3>
          <p>Song artists</p>
        </div>
        <Heart />
      </motion.li>
      <motion.li className={styles.music_card__li} variants={itemVariants}>
        <div className={styles.music_card__cover_li}>
          <img src={cover} alt="" />
        </div>
        <div>
          <h3>Song title</h3>
          <p>Song artists</p>
        </div>
        <Heart />
      </motion.li>
      <motion.li className={styles.music_card__li} variants={itemVariants}>
        <div className={styles.music_card__cover_li}>
          <img src={cover} alt="" />
        </div>
        <div>
          <h3>Song title</h3>
          <p>Song artists</p>
        </div>
        <Heart />
      </motion.li>
    </motion.ul>
  );
}
