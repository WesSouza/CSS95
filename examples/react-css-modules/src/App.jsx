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
      <div className={classNames(styles.ActiveWindow)}>
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
          <fieldset className={styles.GroupBox}>
            <legend className={styles.GroupBoxLabel}>Option Buttons</legend>

            <div className={styles.Vertical}>
              <div className={styles.Option}>
                <input id="option-1" name="option" value="1" type="radio" />
                <label htmlFor="option-1">Option 1</label>
              </div>
              <div className={styles.Option}>
                <input id="option-2" name="option" value="2" type="radio" />
                <label htmlFor="option-2">Option 2</label>
              </div>
              <div className={styles.Option}>
                <input id="option-3" name="option" value="3" type="radio" />
                <label htmlFor="option-3">Option 3</label>
              </div>
            </div>
          </fieldset>
          <fieldset className={styles.GroupBox}>
            <legend>Check Boxes</legend>

            <div className={styles.Vertical}>
              <div className={styles.Checkbox}>
                <input
                  id="checkbox-1"
                  name="checkbox-1"
                  value="1"
                  type="checkbox"
                />
                <label htmlFor="checkbox-1">Check Box 1</label>
              </div>
              <div className={styles.Checkbox}>
                <input
                  id="checkbox-2"
                  name="checkbox-2"
                  value="2"
                  type="checkbox"
                />
                <label htmlFor="checkbox-2">Check Box 2</label>
              </div>
              <div className={styles.Checkbox}>
                <input
                  id="checkbox-3"
                  name="checkbox-3"
                  value="3"
                  type="checkbox"
                />
                <label htmlFor="checkbox-3">Check Box 3</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className={styles.WindowResize}></div>
      </div>
    </div>
  );
}
