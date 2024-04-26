import styles from "./MusicCover.module.scss";

interface MusicCoverProps {
  cover: string;
  aria: boolean;
}

export default function MusicCover({ cover, aria }: MusicCoverProps) {
  return (
    <div className={styles.music_cover} aria-hidden={aria}>
      <img src={cover} alt="track cover" />
    </div>
  );
}
