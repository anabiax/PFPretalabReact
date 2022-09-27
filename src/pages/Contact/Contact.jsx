import styles from './contact.module.css'
import { useState } from 'react'
import { database } from '../../services/firebase'
import { ref, set, push } from 'firebase/database'


function Contact() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState ('')
    const [mensagem, setMensagem] = useState('')

    function handleInputValueNome(event) {
        setNome(event.target.value)
    }

    function handleInputValueEmail(event) {
        setEmail(event.target.value)
    }    

    function handleInputValueTelefone(event) {
        setTelefone(event.target.value)
    }

    function handleInputValueMensagem(event) {
        setMensagem(event.target.value)
    }

    // prevenir um comportamento padrão do navegador
    function handleCreateMessage(event) { // essa função é o meu onSubmit lá de baixo
        event.preventDefault()
        const postListRef = ref(database, 'mensagens')
        const newPostRef = push(postListRef)
        
        // definindo e mandando a informação p/ do db
        set(newPostRef, {
            textMessage: mensagem,
            telefone: telefone,
            email: email,
            nome: nome
        })
        //limpando os campos e voltando ao estado inicial
        setMensagem('')
        setNome('')
        setEmail('')
        setTelefone('')
    }
    
    return (
        <>
            <div className={styles.header}>
                <h1>Informações para contato</h1>
            </div>

            <div>
            <form onSubmit={handleCreateMessage}>
                <label for="nomecompleto">Nome completo</label> 
                <input onChange={handleInputValueNome} value={nome} type="text" id="nomecompleto" class={styles.inputPadrao} required placeholder="Digite seu nome completo"/>
    
                <label for="email">Email</label>
                <input onChange={handleInputValueEmail} value={email} type="email" id="email" class={styles.inputPadrao} required placeholder="seuemail@dominio.com"/> 
    
                <label for="telefone">Telefone</label>
                <input onChange={handleInputValueTelefone} value={telefone} type="tel" id="telefone" class={styles.inputPadrao} placeholder="(XX) XXXXX-XXXX" />
    
                <label for="mensagem">Mensagem</label>
                <textarea onChange={handleInputValueMensagem} value={mensagem} cols="70" rows="10" id="mensagem" class={styles.inputPadrao} required placeholder="Digite a sua mensagem aqui"></textarea> 
            
                <input type="submit" value="Enviar mensagem" class={styles.enviar}/>
            </form>

            </div>
        </>
    )
}

export default Contact