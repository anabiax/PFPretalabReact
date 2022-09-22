import styles from './header.module.css'

function Header(){
    return ( 
        <nav>
            <div className={styles.header}>
                <ul className={styles.list}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/jornada">Jornada</a></li>
                    <li><a href="/comments">Comentários</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
            <hr></hr>
        </nav>
    )
}

export default Header