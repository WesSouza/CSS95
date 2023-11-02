import { styles } from "css95";

export function App() {
  return (
    <div className={styles.ClassicTheme} style={{ "--css95-scale": 2 }}>
      <button className={styles.Button}>Button</button>
    </div>
  );
}
