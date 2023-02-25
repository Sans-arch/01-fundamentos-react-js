import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ut omnis harum porro eos. Deserunt minus atque accusamus ipsum animi, tempora impedit, nulla nostrum odio maxime minima assumenda iusto ipsa!"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal!" />
        </main>
      </div>
    </div>
  );
}

export default App;
