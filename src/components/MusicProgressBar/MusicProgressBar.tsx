import styles from "./MusicProgressBar.module.scss";

export default function MusicProgressBar() {
  return (
    <div>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar__inner} data-move="true"></div>
      </div>
      <div className={styles.progress_bar__time}>
        <p>00:30</p>
        <p>01:17</p>
      </div>
    </div>
  );
}
