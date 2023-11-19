import classNames from "classnames";
import { styles } from "css95";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    const url = new URL(location.href);
    const scale = parseFloat(url.searchParams.get("scale") ?? "1");

    document.documentElement.style.setProperty("--css95-scale", scale);
  }, []);

  return (
    <div className={styles.ClassicTheme}>
      <div className={classNames(styles.Window, styles.WindowActive)}>
        <div className={styles.WindowTitleBar}>
          <div className={styles.WindowTitleIcon}></div>
          <div className={styles.WindowTitleText}>
            CSS 95 React CSS Modules Example
          </div>
          <div className={styles.WindowTitleButtons}>
            <button className={styles.WindowTitleButton}></button>
            <button className={styles.WindowTitleButton}></button>
            <button className={styles.WindowTitleButton}></button>
          </div>
        </div>
        <div className={classNames(styles.WindowContent, styles.SmallSpacing)}>
          <div
            className={classNames(
              styles.Grouping,
              styles.Horizontal,
              styles.SmallSpacing,
            )}
          >
            <button className={styles.Button}>Button</button>
            <input className={styles.TextBox} />
          </div>
          <div className={classNames(styles.Field, styles.SmallSpacing)}>
            Content
          </div>
        </div>
        <div className={styles.WindowResize}></div>
      </div>
    </div>
  );
}
