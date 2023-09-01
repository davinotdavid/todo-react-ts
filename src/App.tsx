import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import TaskInputSection from "./components/TaskInputSection";
import type { TaskType } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleOnCreateTask(taskText: string) {
    const newTask = {
      id: uuidv4(),
      checked: false,
      text: taskText,
    };

    setTasks((previousTasks) => [newTask, ...previousTasks]);
  }

  function handleOnTaskChecked(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.checked = !task.checked;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleOnTaskDeleted(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskInputSection onCreateTask={handleOnCreateTask} />
        <TaskBoard
          tasks={tasks}
          onTaskChecked={handleOnTaskChecked}
          onTaskDeleted={handleOnTaskDeleted}
        />
      </main>
    </>
  );
}

export default App;
