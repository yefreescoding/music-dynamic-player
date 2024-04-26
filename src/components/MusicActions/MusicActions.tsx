import MusicControls from "../MusicControls/MusicControls";
import MusicProgressBar from "../MusicProgressBar/MusicProgressBar";
import styles from "./MusicActions.module.scss";

interface MusicActionsProps {
  aria: boolean;
  totalTracks: number;
  currentTrack: number;
  setTrack: React.Dispatch<React.SetStateAction<number>>;
}

export default function MusicActions({
  aria,
  totalTracks,
  currentTrack,
  setTrack,
}: MusicActionsProps) {
  return (
    <div className={styles.music_actions} aria-hidden={aria}>
      <MusicProgressBar />
      <MusicControls
        currentTrack={currentTrack}
        totalTracks={totalTracks}
        setTrack={setTrack}
      />
    </div>
  );
}
