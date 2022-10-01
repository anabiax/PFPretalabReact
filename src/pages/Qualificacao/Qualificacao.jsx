import styles from './qualificacao.module.css'


function Qualificacao() {
    return (
        <>
            <div className={styles.qualificationSections}>

                    {/* <!--==================== bloco qualificação ====================--> */}
                    <div className={styles.qualificationContent}  data-content id="education">

                        <div className={styles.qualificationActive}>

                            {/* <!--==================== Qualificação 1 ====================--> */}
                            <div className={styles.qualificationData}>
                                <div></div>

                                <div>
                                    <span className={styles.qualificationRounder}></span>
                                    <span className={styles.qualificationLine}></span>
                                </div>

                                <div>
                                    <h3 className={styles.qualificationTitle}>Desenvolvimento web Java Full Stack. </h3>
                                    <span className={styles.qualificationSubtitle}>Generation Brasil</span>
                                    <div className={styles.qualificationCalendar}>
                                        <i class="uil uil-calendar-alt"></i>
                                        2022
                                    </div>
                                </div>
                            </div>

                            {/* <!--==================== Qualificação 2 ====================--> */}
                            <div className={styles.qualificationData}>

                                <div>
                                    <h3 className={styles.qualificationTitle}>Ciclo formativo básico em tecnologia. </h3>
                                    <span className={styles.qualificationSubtitle}>PretaLab</span>
                                    <div className={styles.qualificationCalendar}>
                                        <i class="uil uil-calendar-alt"></i>
                                        2022
                                    </div>
                                </div>

                                <div>
                                    <span className={styles.qualificationRounder}></span>
                                    <span className={styles.qualificationLine}></span>
                                </div>

                            </div>

                            {/* <!--==================== Qualificação 3 ====================--> */}
                            <div className={styles.qualificationData}>
                                <div></div>

                                <div>
                                    <span className={styles.qualificationRounder}></span>
                                </div>

                                <div>
                                    <h3 className={styles.qualificationTitle}>Programação para não programadores.</h3>
                                    <span className={styles.qualificationSubtitle}>Movimento Black Money</span>
                                    <div className={styles.qualificationCalendar}>
                                        <i class="uil uil-calendar-alt"></i>
                                        2022
                                    </div>
                                </div>

                            </div>
                    </div>
                        
                </div>
            </div>
        </>
            
    )
}

export default Qualificacao