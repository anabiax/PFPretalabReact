import styles from './jornada.module.css'

function Jornada(){
    return(
        <>
            <div className={styles.texto}>
                <p>As habilidades da comunicação e escrita, além de serem soft-skills importantes para o mercado profissional, sempre foram muito presentes na minha vida. Então, acho que combiná-las com o  objetivo de compartilhar parte da minha <span>jornada em tecnologia</span> vai resultar em algo muito bom.   </p>
            </div>
            
            <div className={styles.sobre}>
                <h2>Sobre mim</h2>
            </div>
            <div className={styles.texto}>
                <p>Meu nome é Ana Beatriz, mas prefiro Ana porque sinto que estão brigando comigo quando me chamam pelo nome composto (paranoia dos que tem nome composto). Sou fascinada pela perspectiva <span>interdisciplinar</span>, isto é, acredito na interconexão dos conhecimentos, e estou no processo de continuidade de carreira, ouvi isso de uma mentora maravilhosa e resolvi acatar, pois achei linda a forma como o repertório é valorizado como parte da pessoa desenvolvedora. </p>
                <p>Trago como repertório minha formação não concluída na área das humanidades na Universidade Federal de São Paulo (UNIFESP), jornada esta não encerrada porque me fascinei pela tecnologia e decidi redirecionar minha vida para o que faz meus olhos brilharem com perspectiva. Adoraria falar que sempre tive aptidão para a área tecnológica e que desmontei um computador com meu pai aos 5 anos de idade, mas estaria falseando a realidade. Na verdade, apenas agora em 2022 aos 21 anos de idade (favor respeitar a geração 2001) consigo visualizar <span>futuros possíveis</span> para o meu corpo em determinados espaços. </p>

            </div>

            <div className={styles.sobre}>
                <h2>Jornada em tech</h2>
            </div>

            <div className={styles.texto}>
                <p>Estar no processo de continuidade de carreira para a área da tecnologia é algo que verdadeiramente mexe com as estruturas da pessoa que decide trilhar esse caminho permeado por constantes desafios. Contudo, os frutos que são colhidos durante o percurso é o que traz significado à trajetória. Dado pressuposto, vou procurar sintetizar em poucas palavras esse percurso que se iniciou no mês de abril, no evento <span>Programação para não programadores</span> promovido pelo Movimento Black Money e ministrado pela desenvolvedora Simara Conceição.</p>
                <p>Após ter pesquisado muito sobre o tema e revisitado diversos pontos de vista, indo de tecnologistas à cientistas sociais, encorpei minha questão formulada inicialmente, todavia, ainda não tenho as respostas para as minhas incógnitas.  Contudo, a possibilidade de beber da fonte de outras áreas para a analisar um fenômeno verdadeiramente me instigou. 
                    <span> Pense em um mosaico</span>. É exatamente dessa forma que eu enxergo a construção interdisciplinar, pois apesar de cada elemento possuir suas características próprias é na harmonia (às vezes nem tão harmoniosa) que algo muito mais robusto é gerado. É na conexão que pode-se alcançar a <span>inovação</span> por meio de <span>valores ressignificados</span>, e é exatamente isso que faz os meus olhos brilharem na área tecnológica. </p>

                <p>Em suma, posso considerar que no meu tempo livre gosto de estudar sobre algoritmos e inteligencia artificial, com ênfase nos vieses de reconhecimento facial. Contudo, o que realmente me cativou foi a área de desenvolvimento web, onde decidi focar todas as minhas energias para me tornar uma pessoa desenvolvedora. 
                    Digo de antemão que até chegar ao ponto de conseguir me visualizar dentro desse espectro foi um longo processo, mas justamente por conta do vínculo às comunidades digitais consegui visualizar futuros possíveis. E agora que o <span>pilar de autoconhecimento </span>foi desenvolvido nada me fará questionar acerca do meu valor e competência para conquistar o que quero.</p>

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
                <p>Trilhar esse percurso de aprendizagem em uma área completamente nova é desafiador, pois tive de mudar a minha mentalidade e ser muito persistente, orientando a minha perspectiva para o futuro sem deixar de colher os frutos do presente. Se fosse para me resumir em uma frase certamente seria: "<span>a Ana vê potencialidade na diversidade e na curiosidade também </span>(cá pra nós)."  </p>
            </div>

            <div className={styles.video}>
                <h2>Além disso, não poderia deixar de lado a música <span>Quase lá</span>, que alimenta continuamente a minha serelepe criança interior a acreditar no processo. </h2>
                <iframe width="880" height="500" src="https://www.youtube.com/embed/43kEjzHpgTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            {/* <div className={styles.texto}>
                <p>Obs: apesar da Disney ter umas problemáticas bem sérias no que diz respeito à representação feminina, Tiana, sem sombra de dúvidas, foi um dos maiores acertos da rede. Não sou uma pessoa muito estratégica para avaliação de filmes ( se bem que quando o assunto é Disney, a pessoa aqui domina rs ), mas a potência contida em cada verso enunciado por Tiana carrega uma história que vale a pena parar pra admirar e propagar para alcançar mais e mais meninas negras. </p>
            </div> */}

            <div className={styles.tiana}>
                <h3>
                    "Deseje e sonhe com muita fé no coração. Mas lembre-se, Tiana, aquela estrela só é responsável pela metade. O resto você faz com
                    muito trabalho e então, aí sim, vai poder fazer tudo o que imaginar. Me
                    prometa só uma coisa. Que nunca vai se esquecer do que é realmente importante."
                    <br></br>
                    <span>(A Princesa e o Sapo, 2009).</span>
                </h3>
            </div>
        </>
    )
}

export default Jornada 