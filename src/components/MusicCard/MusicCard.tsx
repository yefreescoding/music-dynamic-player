import { useState } from "react";
import styles from "./MusicCard.module.scss";

import { motion } from "framer-motion";

import soundWaveAni from "/icons/sound-wave-ani.gif";
import soundWavePause from "/icons/wave-sound-pause.svg";

import data from "../../data/music.json";

// component imports
import MusicCover from "../MusicCover/MusicCover";
import MusicActions from "../MusicActions/MusicActions";
import MusicUlist from "../MusicUlist/MusicUlist";

export default function MusicCard() {
  const [coverAria, setCoverAria] = useState(false);
  const [listAria, setListAria] = useState(false);
  const [listAriaMenu, setListAriaMenu] = useState(false);
  const [controlsAria, setControlsAria] = useState(false);
  const [backgroundCover, setBackgroundCover] = useState(false);

  const [tracks] = useState(data.musicList);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleListOpen = () => {
    setListAriaMenu(!listAriaMenu);
    setBackgroundCover(!backgroundCover);
    setCoverAria(false);
  };

  const handleCoverOpen = () => {
    setCoverAria(!coverAria);
    setListAriaMenu(false);
    setBackgroundCover(false);
  };

  return (
    <motion.article
      initial={{ scale: 1 }}
      whileTap={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.2,
        delay: 0.05,
      }}
      className={styles.music_card}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${currentTrack.coverColors[0]} 0%, ${currentTrack.coverColors[1]} 90%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-1rem",
          zIndex: "-1",
          backgroundImage: `url(${currentTrack.cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(0.5rem) brightness(0.5)",
          opacity: `${backgroundCover ? "1" : "0"}`,
        }}
      ></div>
      <div onClick={handleCoverOpen}>
        <MusicCover cover={currentTrack.cover} aria={coverAria} />
      </div>
      <div className={styles.music_card__info}>
        <button
          className={styles.music_card__cover_btn}
          type="button"
          onClick={handleCoverOpen}
          aria-hidden={coverAria}
        >
          <img src={currentTrack.cover} alt="" />
        </button>
        <div
          onClick={() => {
            setControlsAria(!controlsAria);
            setListAria(!listAria);
            setListAriaMenu(false);
            setBackgroundCover(false);
          }}
        >
          <h1>{currentTrack.title}</h1>
          <p>{currentTrack.artist}</p>
        </div>
        <img src={isPlaying ? soundWaveAni : soundWavePause} alt="" />
      </div>
      <MusicActions
        trackDuration={currentTrack.trackDuration}
        aria={controlsAria}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setTrack={setCurrentTrack}
        tracks={tracks}
        handleMusicList={handleListOpen}
      />
      <MusicUlist
        aria={listAriaMenu}
        tracks={tracks}
        currentTrack={currentTrack}
        setTrack={setCurrentTrack}
      />
    </motion.article>
  );
}
