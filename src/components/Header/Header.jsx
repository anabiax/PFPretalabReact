import styles from './header.module.css'

function Header(){
    return ( 
        <header>
            <div className={styles.header}>
                <ul className={styles.list}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#comments'>Comments</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <hr></hr>
        </header>
    )
}

export default Header