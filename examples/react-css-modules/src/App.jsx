import { styles } from "css95";

export function App() {
  return (
    <div
      className={styles.ClassicTheme}
      style={{
        "--css95-scale": 1,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button className={styles.Button}>Button</button>
      <input className={styles.Field} />
    </div>
  );
}
