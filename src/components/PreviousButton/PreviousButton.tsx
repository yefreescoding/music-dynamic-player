import styles from "./PreviousButton.module.scss";

interface PreviousButtonProps {
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
  size?: string;
}

export default function PreviousButton({
  currentTrack,
  tracks,
  size,
  setTrack,
}: PreviousButtonProps) {
  const handlePreviousTrack = () => {
    const index = tracks.findIndex((x) => x.id === currentTrack.id);

    if (index === 0) {
      setTrack(tracks[tracks.length - 1]);
    } else {
      setTrack(tracks[index - 1]);
    }
  };

  return (
    <button
      aria-controls="previous"
      type="button"
      onClick={handlePreviousTrack}
      className={styles.btn}
      style={{ "--_size": size } as React.CSSProperties}
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
  );
}
