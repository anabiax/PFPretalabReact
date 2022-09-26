import styles from './jornada.module.css'

function Jornada(){
    return(
        <>
            <div className={styles.sobre}>
                <h2>Sobre mim</h2>
            </div>
            <div className={styles.texto}>
                <p>Meu nome é Ana Beatriz, mas prefiro Ana porque sinto que estão brigando comigo quando me chamam pelo nome composto. Sou fascinada pela perspectiva <span>interdisciplinar</span>, isto é, acredito na interconexão dos conhecimentos, e estou no processo de continuidade de carreira, ouvi isso de uma mentora maravilhosa e resolvi acatar, pois achei linda a forma como o repertório é valorizado como parte da pessoa desenvolvedora. </p>
            </div>

            <div className={styles.sobre}>
                <h2>Jornada em tech</h2>
            </div>

            <div className={styles.texto}>
                <p>Estar no processo de continuidade de carreira para a área da tecnologia é algo que verdadeiramente mexe com as estruturas da pessoa que decide trilhar esse caminho permeado por constantes desafios. Contudo, os frutos que são colhidos durante o percurso é o que traz significado à trajetória. </p>
                <p>Dado pressuposto, vou procurar sintetizar em poucas palavras esse percurso que se iniciou no mês de abril, no evento <span>Programação para não programadores</span> promovido pelo Movimento Black Money e ministrado pela desenvolvedora Simara Conceição.</p>
            
            <br></br>
            <p>Vieses algoritmicos - envolvimento dentro da universidade com uma prof que mudou a minha vida (Marina)</p>
            <br></br>
            <p>inquietude de conseguir visualizar como as humanidades se relacionam intimamente com a tecnologia e continuarem separando em áreas isoladas como se fossem conhecimento dissonantes.</p>

            </div>

            <div className={styles.sobre}>
                <h2>Vínculo com as comunidades digitais</h2>
            </div>

            <div className={styles.texto}>
                <p>Certamente as comunidades digitais tiveram um papel crucial para que o impulso fosse tomado e acredito que palavras não seriam suficientes para expressar tamanha gratidão, em especial às comunidades compostas por pessoas negras. </p>
            </div>

            <div className={styles.sobre}>
                <h2><i>Redescobrir o gosto e o sabor da festa</i></h2>
                <h5>Verso da música <span>Redescobrir</span> (amo a versão na voz da Maria Rita, filha da Elis Regina).</h5>
            </div>

            <div className={styles.texto}>
                <p>Trilhar esse percurso de aprendizagem em uma área completamente nova é desafiador, pois tive de mudar a minha mentalidade e ser muito persistente, orientando a minha perspectiva para o futuro sem deixar de colher os frutos do presente. Se fosse para me resumir em uma frase certamente seria: “a Ana vê potencialidade na diversidade e na curiosidade tb (cá pra nós)”.  </p>
            </div>

            <div className={styles.video}>
                <h2>Além disso, não poderia deixar de lado a música <span>Quase lá</span>, que alimenta continuamente a minha serelepe criança interior a acreditar no processo. </h2>
                <iframe width="880" height="500" src="https://www.youtube.com/embed/43kEjzHpgTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            {/* <div className={styles.video}>
                <h2>Certamente os versos da música <span>Redescobrir</span> delinearam cada pedacinho dessa jornada, que tal dar uma rememorada nesta melodia contagiante?</h2>
                <iframe width="880" height="500" src="https://www.youtube.com/embed/P39f0_aYv-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>  */}

        </>
    )
}

export default Jornada 