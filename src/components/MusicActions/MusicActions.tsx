import MusicControls from "../MusicControls/MusicControls";
import MusicProgressBar from "../MusicProgressBar/MusicProgressBar";
import SoundBar from "../SoundBar/SoundBar";
import styles from "./MusicActions.module.scss";

interface MusicActionsProps {
  aria: boolean;
  isPlaying: boolean;
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
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
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
  handleMusicList: () => void;
  trackDuration: number;
}

export default function MusicActions({
  aria,
  setIsPlaying,
  isPlaying,
  tracks,
  currentTrack,
  setTrack,
  handleMusicList,
  trackDuration,
}: MusicActionsProps) {
  return (
    <div className={styles.music_actions} aria-hidden={aria}>
      <MusicProgressBar trackDuration={trackDuration} isPlaying={isPlaying} />
      <MusicControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        tracks={tracks}
        setTrack={setTrack}
      />
      <SoundBar />
      <div className={styles.music_actions__btn}>
        <a href="">
          <svg
            viewBox="0 0 256 256"
            width="23"
            height="23"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
              fill="#1ED760"
            />
          </svg>
        </a>
        <a href="">
          <svg
            viewBox="0 0 256 180"
            width="25"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
              fill="red"
            />
            <path
              fill="#FFF"
              d="m102.421 128.06 66.328-38.418-66.328-38.418z"
            />
          </svg>
        </a>
        <button onClick={handleMusicList}>
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M2 11L16 11"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 17L13 17"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 5L20 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20 18.5C20 19.3284 19.3284 20 18.5 20C17.6716 20 17 19.3284 17 18.5C17 17.6716 17.6716 17 18.5 17C19.3284 17 20 17.6716 20 18.5ZM20 18.5V10.6C20 10.2686 20.2686 10 20.6 10H22"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
