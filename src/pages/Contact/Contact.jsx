import styles from './contact.module.css'
import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push } from 'firebase/database'

// criação de um objeto
const firebaseConfig = {
    apiKey: "AIzaSyDJO0ftqp0LlrvicL3zLsKotJ-k0FuQqeo",
    authDomain: "projetofinalpretalab.firebaseapp.com",
    projectId: "projetofinalpretalab",
    storageBucket: "projetofinalpretalab.appspot.com",
    messagingSenderId: "216441617631",
    appId: "1:216441617631:web:5500902df008c5703b7d6a",
    measurementId: "G-DMB75KR811",
    databaseURL: "https://projetofinalpretalab-default-rtdb.firebaseio.com/"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

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