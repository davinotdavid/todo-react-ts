import NoTasks from "./NoTasks";
import styles from "./TaskBoard.module.css";

export default function TaskBoard() {
  return (
    <section>
      <header className={styles.boardHeader}>
        <div>
          <span className={styles.spanTasksCreated}>Tasks created</span>
          <span className={styles.badge}>0</span>
        </div>
        <div>
          <span className={styles.spanTasksFinished}>Finished</span>
          <span className={styles.badge}>0</span>
        </div>
      </header>

      <NoTasks />
    </section>
  );
}
