import styles from './Resultado.module.css'

function Resultado( {informacoes} ) {
    return (
        <div>
            <h1>Índice de Massa Corporal</h1>
            <div className={styles.content}>
                <p className={styles.title}>{informacoes.exibeInformacoes ? informacoes.solucao : 'Soluçoes seram dada aqui para você melhorar ou manter seu IMC e ter uma saúde ótima!'}</p>
                <div className={styles.resultado}>
                    <h2>Seu resultado é:</h2>
                    <span className={styles.resultadoImc}>{informacoes.exibeInformacoes ? informacoes.imc : 'SEU IMC'}</span>
                    <span className={styles.resultadoTipo}>{informacoes.exibeInformacoes ? informacoes.tipo : 'Diagnostico baseado no seu IMC'}</span>
                    <h3 className={styles.resultadoCalculo}>O cálculo do Índice de Massa Corporal (IMC) é feito dividindo o peso da pessoa em quilogramas (kg) pela altura ao quadrado em metros (m²). A fórmula é: IMC = peso / (altura x altura).</h3>
                </div>
            </div>
        </div>
    )
}

export default Resultado