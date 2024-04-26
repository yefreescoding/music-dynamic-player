import { useState } from "react";
import styles from "./MusicCard.module.scss";

import { motion } from "framer-motion";

import cover from "/covers/music-cover-2.jpg";
import soundWave from "/icons/sound-wave-ani.gif";

// component imports
import MusicCover from "../MusicCover/MusicCover";
import MusicListBtn from "../MusicListBtn/MusicListBtn";
import MusicActions from "../MusicActions/MusicActions";
import MusicUlist from "../MusicUlist/MusicUlist";

export default function MusicCard() {
  const [coverAria, setCoverAria] = useState(false);
  const [listAria, setListAria] = useState(false);
  const [listAriaMenu, setListAriaMenu] = useState(false);
  const [controlsAria, setControlsAria] = useState(false);
  const [backgroundCover, setBackgroundCover] = useState(false);

  const handleListOpen = () => {
    setListAriaMenu(!listAriaMenu);
    setBackgroundCover(true);
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
    >
      <div
        style={{
          position: "absolute",
          inset: "-1rem",
          zIndex: "-1",
          backgroundImage: `url(${cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(0.5rem) brightness(0.5)",
          opacity: `${backgroundCover ? "1" : "0"}`,
        }}
      ></div>
      <div onClick={handleCoverOpen}>
        <MusicCover cover={cover} aria={coverAria} />
      </div>
      <div className={styles.music_card__info}>
        <button
          className={styles.music_card__cover_btn}
          type="button"
          onClick={handleCoverOpen}
          aria-hidden={coverAria}
        >
          <img src={cover} alt="" />
        </button>
        <div
          onClick={() => {
            setControlsAria(!controlsAria);
            setListAria(!listAria);
            setListAriaMenu(false);
            setBackgroundCover(false);
          }}
        >
          <h1>Song title</h1>
          <p>Song artists</p>
        </div>
        <img src={soundWave} alt="" />
      </div>
      <MusicActions aria={controlsAria} />
      <MusicUlist aria={listAriaMenu} />
      <MusicListBtn aria={listAria} toggleListAria={handleListOpen} />
    </motion.article>
  );
}
