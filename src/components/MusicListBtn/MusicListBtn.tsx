interface MusicListBtnProps {
  aria: boolean;
  toggleListAria: () => void;
}

const songsListStyles = {
  fontSize: "0.8rem",
  color: "hsl(0, 0%, 70%)",
};

const lineStyle = {
  background: "hsl(0, 0%, 70%)",
  width: "150px",
  height: "4px",
  margin: "auto",
  borderRadius: "2rem",
};

export default function MusicListBtn({
  aria,
  toggleListAria,
}: MusicListBtnProps) {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        padding: `${aria ? "0.5rem" : "0"}`,
        width: "100%",
        height: `${aria ? "auto" : "0"}`,
        transform: `translateY(${aria ? "0" : "100%"})`,
        transition: "all 200ms ease-in-out",
        textAlign: "center",
      }}
      aria-hidden={aria}
      onClick={toggleListAria}
    >
      <p style={songsListStyles}>Song list</p>
      <div style={lineStyle}></div>
    </button>
  );
}
