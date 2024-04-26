import styles from "./MusicControls.module.scss";

interface MusicControlsProps {
  currentTrack: number;
  totalTracks: number;
  setTrack: React.Dispatch<React.SetStateAction<number>>;
}

export default function MusicControls({
  currentTrack,
  setTrack,
  totalTracks,
}: MusicControlsProps) {
  const handleForwardTrack = () => {
    if (currentTrack >= totalTracks - 1) {
      setTrack(0);
    } else {
      setTrack(currentTrack + 1);
    }
  };
  const handlePreviousTrack = () => {
    if (currentTrack === 0) {
      setTrack(totalTracks - 1);
    } else {
      setTrack(currentTrack - 1);
    }
  };

  return (
    <div className={styles.music_controls}>
      <button
        aria-controls="previous"
        type="button"
        onClick={handlePreviousTrack}
      >
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          strokeWidth="1.2"
        >
          <path
            d="M21.0441 5.70436C21.4402 5.41246 22 5.69531 22 6.1874V17.8126C22 18.3047 21.4402 18.5875 21.0441 18.2956L13.1555 12.483C12.8301 12.2432 12.8301 11.7568 13.1555 11.517L21.0441 5.70436Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.0441 5.70436C10.4402 5.41246 11 5.69531 11 6.1874V17.8126C11 18.3047 10.4402 18.5875 10.0441 18.2956L2.15555 12.483C1.8301 12.2432 1.8301 11.7568 2.15555 11.517L10.0441 5.70436Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <button aria-controls="play">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          strokeWidth="1.2"
        >
          <path
            d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <button
        aria-controls="forward"
        type="button"
        onClick={handleForwardTrack}
      >
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          strokeWidth="1.2"
        >
          <path
            d="M2.95592 5.70436C2.55976 5.41246 2 5.69531 2 6.1874V17.8126C2 18.3047 2.55976 18.5875 2.95592 18.2956L10.8445 12.483C11.1699 12.2432 11.1699 11.7568 10.8445 11.517L2.95592 5.70436Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.9559 5.70436C13.5598 5.41246 13 5.69531 13 6.1874V17.8126C13 18.3047 13.5598 18.5875 13.9559 18.2956L21.8445 12.483C22.1699 12.2432 22.1699 11.7568 21.8445 11.517L13.9559 5.70436Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
