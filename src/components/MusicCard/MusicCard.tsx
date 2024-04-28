import { useState } from "react";
import styles from "./MusicCard.module.scss";

import { motion, AnimatePresence } from "framer-motion";

// Icons imports
import soundWaveAni from "/icons/sound-wave-ani.gif";
import soundWavePause from "/icons/wave-sound-pause.svg";

// data import
import data from "../../data/music.json";

// component imports
import MusicCover from "../MusicCover/MusicCover";
import MusicActions from "../MusicActions/MusicActions";
import MusicUlist from "../MusicUlist/MusicUlist";
import PlayButton from "../PlayButton/PlayButton";
import ForwardButton from "../ForwardButton/ForwardButton";

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
      className={styles.music_card}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${currentTrack.coverColors[0]} 0%, ${currentTrack.coverColors[1]} 90%)`,
        boxShadow: `0 10px 26px ${currentTrack.coverColors[1]}`,
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
        <MusicCover
          isPlaying={isPlaying}
          cover={currentTrack.cover}
          aria={coverAria}
        />
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
        <div className={styles.music_card__info__sound}>
          <AnimatePresence>
            {controlsAria ? (
              <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                src={isPlaying ? soundWaveAni : soundWavePause}
                alt="icono"
              />
            ) : (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <PlayButton
                  size="33px"
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                />
                <ForwardButton
                  size="27px"
                  tracks={tracks}
                  currentTrack={currentTrack}
                  setTrack={setCurrentTrack}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <MusicUlist
        aria={listAriaMenu}
        tracks={tracks}
        currentTrack={currentTrack}
        setTrack={setCurrentTrack}
      />
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
    </motion.article>
  );
}
