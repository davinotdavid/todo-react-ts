import styles from "./Task.module.css";
import trashcanSVG from "../assets/trashcan.svg";

export interface TaskType {
  id: string;
  checked: boolean;
  text: string;
}

interface TaskProps {
  task: TaskType;
  onDelete: (taskId: string) => void;
  onChecked: (taskId: string) => void;
}

export default function Task({
  task: { id, checked, text },
  onDelete,
  onChecked,
}: TaskProps) {
  return (
    <li className={styles.taskItem}>
      <input type="checkbox" checked={checked} onClick={() => onChecked(id)} />
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>
        <img src={trashcanSVG} alt="" />
      </button>
    </li>
  );
}
