import styles from './comments.module.css'
import { FiPlus } from 'react-icons/fi'

function Comments (){
    return (
        <>
            <div className={styles.header}>
                <h1>Deixe um comentário</h1>
            </div>
            <div className={styles.inputContainer}>
                <input
                className={styles.input}
                type="text"
                placeholder="Digite sua mensagem aqui"
                />
                <div className={styles.addContainer}>
                    <button className={styles.addTask}>
                        <FiPlus size={30} color="#000"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Comments