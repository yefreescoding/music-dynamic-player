import styles from "./ForwardButton.module.scss";

interface ForwardButtonProps {
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

export default function ForwardButton({
  currentTrack,
  tracks,
  size,
  setTrack,
}: ForwardButtonProps) {
  const handleForwardTrack = () => {
    const index = tracks.findIndex((x) => x.id === currentTrack.id);

    if (index >= tracks.length - 1) {
      setTrack(tracks[0]);
    } else {
      setTrack(tracks[index + 1]);
    }
  };

  return (
    <button
      aria-controls="forward"
      type="button"
      onClick={handleForwardTrack}
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
  );
}
