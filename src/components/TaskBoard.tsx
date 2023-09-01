import NoTasks from "./NoTasks";
import styles from "./TaskBoard.module.css";
import Task, { TaskType } from "./Task";

interface TaskBoardProps {
  tasks: TaskType[];
  onTaskChecked: (taskId: string) => void;
  onTaskDeleted: (taskId: string) => void;
}

export default function TaskBoard({
  tasks,
  onTaskChecked,
  onTaskDeleted,
}: TaskBoardProps) {
  const checkedTasks = tasks.reduce(
    (prev, current) => (current.checked ? ++prev : prev),
    0
  );
  const totalTasks = tasks.length;

  return (
    <section>
      <header className={styles.boardHeader}>
        <div>
          <span className={styles.spanTasksCreated}>Tasks created</span>
          <span className={styles.badge}>{totalTasks}</span>
        </div>
        <div>
          <span className={styles.spanTasksFinished}>Finished</span>
          <span className={styles.badge}>
            {totalTasks > 0 ? `${checkedTasks} of ${totalTasks}` : totalTasks}
          </span>
        </div>
      </header>

      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onTaskDeleted}
            onChecked={onTaskChecked}
          />
        ))
      ) : (
        <NoTasks />
      )}
    </section>
  );
}
