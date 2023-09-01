import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskInputForm.module.css";
import plusSignSVG from "../assets/plusSign.svg";
import Input from "./Input";

interface TaskInputFormProps {
  onCreateTask: (taskText: string) => void;
}

export default function TaskInputForm({ onCreateTask }: TaskInputFormProps) {
  const [taskText, setTaskText] = useState("");

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCreateButtonClicked(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onCreateTask(taskText);
    setTaskText("");
  }

  return (
    <form className={styles.form} onSubmit={handleCreateButtonClicked}>
      <Input
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskInputChange}
      />
      <button
        type="submit"
        className={styles.button}
        disabled={taskText === ""}
      >
        Create <img src={plusSignSVG} alt=""></img>
      </button>
    </form>
  );
}
