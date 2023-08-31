import styles from "./App.module.css";
import CreateTaskButton from "./components/CreateTaskButton";

import Header from "./components/Header";
import Input from "./components/Input";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <Input placeholder="Add a new task" />
          <CreateTaskButton />
        </section>

        <TaskBoard />
      </main>
    </>
  );
}

export default App;
