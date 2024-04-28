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
      <img
        style={{
          scale: `${isPlaying ? 1.15 : 1}`,
        }}
        src={cover}
        alt="track cover"
      />
    </div>
  );
}
