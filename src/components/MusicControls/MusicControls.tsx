import ForwardButton from "../ForwardButton/ForwardButton";
import PlayButton from "../PlayButton/PlayButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import styles from "./MusicControls.module.scss";

interface MusicControlsProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function MusicControls({
  isPlaying,
  setIsPlaying,
  currentTrack,
  setTrack,
  tracks,
}: MusicControlsProps) {
  return (
    <div className={styles.music_controls}>
      <PreviousButton
        size="47px"
        tracks={tracks}
        currentTrack={currentTrack}
        setTrack={setTrack}
      />
      <PlayButton
        size="60px"
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <ForwardButton
        size="47px"
        tracks={tracks}
        currentTrack={currentTrack}
        setTrack={setTrack}
      />
    </div>
  );
}
