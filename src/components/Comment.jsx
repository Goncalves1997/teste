import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.Comment}>
            <img src="https://media.istockphoto.com/id/963443936/pt/foto/man-is-staying-on-the-white-background-in-the-studio.jpg?s=1024x1024&w=is&k=20&c=2Ng8fz9B2GZhb7-ORU4YlzwK6IsNwDyWPgrc3Qdpy4M=" alt="" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Goncalves</strong>
                            <time title='22 de julho as 08:13h' dateTime='22-07-2023'>cerca de  1h atras</time>
                        </div>

                        <button title='Deletar comentario'>
                            
                        </button>
                    </header>

                    <p>muito bom Devon, parabens!! </p>
                </div>


                <footer>
                    <button>
                        
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}