import styles from "./NoTasks.module.css";
import clipboardSVG from "../assets/clipboard.svg";

export default function NoTasks() {
  return (
    <div className={styles.container}>
      <img src={clipboardSVG} alt="An illustration of a clipboard" />
      <p>
        <strong>You don't have any created tasks</strong>
        <br />
        Create tasks and organize your todo items
      </p>
    </div>
  );
}
