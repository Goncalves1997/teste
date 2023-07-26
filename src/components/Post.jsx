import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://media.istockphoto.com/id/963443936/pt/foto/man-is-staying-on-the-white-background-in-the-studio.jpg?s=1024x1024&w=is&k=20&c=2Ng8fz9B2GZhb7-ORU4YlzwK6IsNwDyWPgrc3Qdpy4M=" />
                <div className={styles.authorInfo}>
                  <strong>Bruno Goncalves</strong>
                  <span>Web Developer</span>
                </div> 
            </div>

            <time title='22 de julho as 08:13h' dateTime='22-07-2023'>publicado a 1 hora</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href="">jane.design/doctorcare</a></p>

            <p> 
                <a href="">#novoprojeto </a> {' '}
                <a href=''>#nlw </a> {' '}
                <a href=''>#rocketseat </a> {' '}
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feeback</strong>

            <textarea
             placeholder="Deixe um comentario"
            />

            
            <footer>
             <button type='submit'>Publicar</button>
            </footer>
        </form>
         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
         </div>
       </article>
    )
}