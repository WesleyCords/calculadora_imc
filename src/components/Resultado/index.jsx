import styles from './Resultado.module.css'

function Resultado() {
    return (
        <div>
            <h1>Índice de Massa Corporal</h1>
            <div className={styles.content}>
                <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae sed fuga distinctio velit facere nulla, impedit quidem. Mollitia laboriosam</p>
                <div className={styles.resultado}>
                    <h2>Seu resultado é:</h2>
                    <span className={styles.resultadoImc}>18.5</span>
                    <span className={styles.resultadoTipo}>Baixo Peso</span>
                    <h3 className={styles.resultadoCalculo}>O cálculo do Índice de Massa Corporal (IMC) é feito dividindo o peso da pessoa em quilogramas (kg) pela altura ao quadrado em metros (m²). A fórmula é: IMC = peso / (altura x altura).</h3>
                </div>
            </div>
        </div>
    )
}

export default Resultado