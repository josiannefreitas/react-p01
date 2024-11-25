import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Josianne Freitas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis nesciunt, officia libero alias, repellendus quis qui beatae dolorem eveniet inventore laudantium, dolor quam autem! Sapiente rem ducimus magnam ipsam?"
          />
          
          <Post
            author="Josianne Freitas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis nesciunt, officia libero alias, repellendus quis qui beatae dolorem eveniet inventore laudantium, dolor quam autem! Sapiente rem ducimus magnam ipsam?"
          />
        </main>
      </div>
    </>
  )
}
