import style from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

            <div className={style.profile}>
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
