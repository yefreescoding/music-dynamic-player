import MusicControls from "../MusicControls/MusicControls";
import MusicProgressBar from "../MusicProgressBar/MusicProgressBar";
import styles from "./MusicActions.module.scss";

interface MusicActionsProps {
  aria: boolean;
}

export default function MusicActions({ aria }: MusicActionsProps) {
  return (
    <div className={styles.music_actions} aria-hidden={aria}>
      <MusicProgressBar />
      <MusicControls />
    </div>
  );
}
