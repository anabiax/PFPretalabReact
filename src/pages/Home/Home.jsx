import styles from './home.module.css'
import fotoPerfil from '../../components/img/anabeatriz.jpeg'
/* import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"; */

function Home(){
    return(
        <>
            <div className={styles.about}>
                <img src={fotoPerfil} alt="foto do arquivo pessoal de AnaB Santos" />
                <div className={styles.text}>
                    <h1>Ana Beatriz dos Santos</h1>
                    <h3>Desenvolvedora Full Stack</h3>
                    <p>Entusiasta das relações entre tecnologia, raça e gênero.</p>
                </div>
            </div>
        </>
    )
}

export default Home

/*
    <div className='media'>
        <a href="https://mailto:anabia200113@gmail.com" class="fa fa-envelope" target="_blank"></a> 
        <a href="https://www.linkedin.com/in/ana-beatriz-santos-2a8133220/" target="_blank" class="devicon-linkedin-plain"></a>
        <a href="https://github.com/anabiax" class="devicon-github-original" target="_blank"></a> 
                    
        <button href='' className='cv'>CURRÍCULO</button>
    </div>
*/