import styles from './comments.module.css'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'


// como se lê: react vai no localStorage e verifica se há uma list, caso sim traga p/ mim.
const Comments = () => {
    const getLocalList = () => {
    let items = localStorage.getItem('list') // essa list é string do localStorage, n confundir com a outra
                // são do JS 

    // se esses itens já existirem, me retorne no formato JSON 
    if (items) {         // memória do MEU computador
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return [] // se n tiver me retorne um array vazio
      }
    }

    const [list, setList] = useState(getLocalList)
    const [newTask, setNewTask] = useState('')  // começará como uma lista vazia

    // function handleInput(event) {
    //     setTask(event.target.value)
    // }

    function handleCreateNewTask () {
        const task = {
            id: nanoid(), // criação de forma dinâmica pegando o que vai ser preenchido pelo usuário
            title: newTask, // estado de task (linha 23)
            isComplete: false
        }

        // n deixar criar se estiver vazio
        if(task.title === '') {
            return
        }

//como se lê: "minha lista vai receber tudo que já EXISTIA [...list] dentro da list + a nova tarefa. Isso me permite criar um novo item sem sobreescrevê-lo (como se fosse a iteração do for)."
// nome técnico das reticências: spread operator   -- JS PURO
        setList([...list, task])
        setNewTask('') // deixar a task vazia dps que for criada
        }

        
        // remova uma task da listagem pelo id
        function handleRemoveTask(id) {

            // faça um filtro e me traga o que for diferente daquele item que cliquei e reconheceu o id
            const tasksFiltered = list.filter(task => task.id !== id)
                                  // olhe p/ o id da lista de um em um e retorne o que for diferente
            setList(tasksFiltered) // a lista filtrada
        }
        
        // LOCALSTORAGE SÓ ENTENDE STRING
        // função p/ salvar na local storage.
        useEffect(() => {
            // cria um localStorage p/ mim colocando os itens
            localStorage.setItem('list', JSON.stringify(list)) // fazendo transformação ao contrário.
        }, [list])
        

    return (
        <>
            <div className={styles.comentario}>
                <h1>Deixe um comentário</h1>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Digite sua mensagem aqui"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />

                <div className={styles.addContainer}>
                    <button className={styles.addTask} type="submit" onClick={handleCreateNewTask}>
                        <FiPlus size={30} color="#fff" />
                    </button>
                </div>
            </div>

            <main>
                <ul className={styles.itemsList}>
                    {list.map(task => {
                        return (
                            <li key={task.id}>
                                <div>
                                <p>{task.title}</p>
                                </div>                                                                            
                                    <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}> 
                                        <FiTrash2 size={20} />
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

// explicação da linha 89:  sempre qnd está passando uma função, no caso handleRemoveTask,(mas poderia ser qqr evento) que tem PARÂMETRO ela será o retorno de uma arrow function, caso contrário quebra.
// se n tiver parâmetro é só passar o nome direto, como onClick={handleCreateNewTask}