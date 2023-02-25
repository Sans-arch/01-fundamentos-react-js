import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Diego Fernandes" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ut omnis harum porro eos. Deserunt minus atque accusamus ipsum animi, tempora impedit, nulla nostrum odio maxime minima assumenda iusto ipsa!" 
      />
      <Post 
        author="Gabriel Buzzi" 
        content="Um novo post muito legal!" 
      />
    </div>
  )
}

export default App
