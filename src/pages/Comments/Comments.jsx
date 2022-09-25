import styles from './comments.module.css'
import { FiPlus, FiTrash } from 'react-icons/fi'
import { nanoid } from 'nanoid'

const itemsList = [
    {
        id: nanoid(),
        title: "Seu comentário aparecerá desta forma."
    },
    {
        id: nanoid(),
        title: "Deixe o seu comentário."
    }
]


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
                        <FiPlus size={30} />
                    </button>
                </div>
            </div>

            <main>
                <ul className={styles.itemsList}>
                    {itemsList.map(item => {
                        return (
                            <li>
                                    <p>{item.title}</p>
                                    <button className={styles.removeTask}>
                                        <FiTrash size={30} />
                                    </button>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}

export default Comments