import { ChangeEvent, useState } from "react";
import styles from "./TaskInputSection.module.css";
import plusSignSVG from "../assets/plusSign.svg";
import Input from "./Input";

interface TaskInputSectionProps {
  onCreateTask: (taskText: string) => void;
}

export default function TaskInputSection({
  onCreateTask,
}: TaskInputSectionProps) {
  const [taskText, setTaskText] = useState("");

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCreateButtonClicked() {
    onCreateTask(taskText);
    setTaskText("");
  }

  return (
    <section className={styles.inputSection}>
      <Input
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskInputChange}
      />
      <button
        className={styles.button}
        onClick={handleCreateButtonClicked}
        disabled={taskText === ""}
      >
        Create <img src={plusSignSVG} alt=""></img>
      </button>
    </section>
  );
}
