import styles from './header.module.css'

function Header(){
    return ( 
        <nav>
            <div className={styles.header}>
                <ul className={styles.list}>
                    <li><a href="/">About</a></li>
                    <li><a href="/comments">Comments</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <hr></hr>
        </nav>
    )
}

export default Header