import styles from './Form.module.css'

function Form() {
    return (
        <div className={styles.content}>
            <img className={styles.logo} src="src\assets\logoIMC.png" alt="" />
            <div className={styles.inputs}>
                <div className={styles.inputPeso}>
                    <label htmlFor="peso">Peso (Kg):</label>
                    <input type="number" id="peso" placeholder="Seu peso "/>
                </div>
                <div className={styles.inputAltura}>
                    <label htmlFor="altura">Altura (m):</label>
                    <input type="number" id="altura" placeholder="Sua altura"/>
                </div>
            </div>
            <button className={styles.buttonCalc} type="button">Calcular</button>
        </div>
    )
}

export default Form 