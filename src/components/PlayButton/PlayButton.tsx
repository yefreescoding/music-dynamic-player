import styles from "./PlayButton.module.scss";

interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  size?: string;
}

export default function PlayButton({
  isPlaying,
  setIsPlaying,
  size,
}: PlayButtonProps) {
  const handlePlayPauseState = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      aria-controls="play"
      onClick={handlePlayPauseState}
      className={styles.play_btn}
      style={{ "--_size": size } as React.CSSProperties}
    >
      {isPlaying ? (
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
            d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
          ></path>
          <path
            d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
          ></path>
        </svg>
      ) : (
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
      )}
    </button>
  );
}
