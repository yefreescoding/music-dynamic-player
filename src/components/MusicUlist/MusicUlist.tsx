import { motion, Variants } from "framer-motion";

import styles from "./MusicUlist.module.scss";

import PlaylistDrag from "../icons/PlaylistDrag";

interface MusicUlistProps {
  aria: boolean;
  tracks: {
    id: number;
    title: string;
    artist: string;
    album: string;
    cover: string;
    trackDuration: number;
    coverColors: string[];
    isFavorite: boolean;
    explicit: boolean;
  }[];
  currentTrack: {
    id: number;
    title: string;
    artist: string;
    album: string;
    cover: string;
    trackDuration: number;
    coverColors: string[];
    isFavorite: boolean;
    explicit: boolean;
  };
  setTrack: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      artist: string;
      album: string;
      cover: string;
      trackDuration: number;
      coverColors: string[];
      isFavorite: boolean;
      explicit: boolean;
    }>
  >;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export default function MusicUlist({
  aria,
  tracks,
  setTrack,
  currentTrack,
}: MusicUlistProps) {
  const handlePlayTrack = (id: number) => {
    const index = tracks.findIndex((x) => x.id === id);

    setTrack(tracks[index]);
  };

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
            duration: 0.4,
            delayChildren: 0.3,
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
        <div>
          <h3>Playing next</h3>
          <p>Autoplaying your favorite music</p>
        </div>
      </motion.li>
      {tracks.map((item) => (
        <motion.li
          key={item.id}
          className={styles.music_card__li}
          variants={itemVariants}
          onClick={() => handlePlayTrack(item.id)}
        >
          <div className={styles.music_card__cover_li}>
            <img src={item.cover} alt="" />
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
          </div>
          <PlaylistDrag />
        </motion.li>
      ))}
    </motion.ul>
  );
}
