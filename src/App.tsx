import styles from "./App.module.css";
import CreateTaskButton from "./components/CreateTaskButton";

import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <Input placeholder="Add a new task" />
          <CreateTaskButton />
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
