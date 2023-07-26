import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
               className={styles.cover} 
               src= "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"  
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media.istockphoto.com/id/963443936/pt/foto/man-is-staying-on-the-white-background-in-the-studio.jpg?s=1024x1024&w=is&k=20&c=2Ng8fz9B2GZhb7-ORU4YlzwK6IsNwDyWPgrc3Qdpy4M="
                />

                <strong>Bruno Goncalves</strong>
                <span>web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Edita seu perfil 
                </a>
            </footer>
        </aside>
    );
}
