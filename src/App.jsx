import { Header } from './components/Header.jsx';
import { Post } from './components/Post';
import  { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
     <Header />
    
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
            <Post
              author="Bruno Goncalves"
              content="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea placeat explicabo cum sint iure pariatur, culpa expedita voluptatem libero eos quia 
              aliquam praesentium, nihil laudantium voluptatibus quos dolores laborum"
            />
            <Post
              author="lucas"
              content="lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea placeat explicabo cum sint iure pariatur, culpa expedita 
              voluptatem libero eos quia aliquam praesentium, nihil laudantium voluptatibus quos dolores laborum"
            />
         </main>
       </div>
    </div>
  )
}

