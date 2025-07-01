import { useState } from 'react'
import styles from './Form.module.css'

function Form({ onCalcular, img }) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const handleForm = () => {
        onCalcular(peso, altura)
    }

    return (
        <div className={styles.content}>
            <img className={styles.logo} src="./src/assets/logoIMC.png" alt="Logo da Página" />
            <div className={styles.inputs}>
                <div className={styles.inputPeso}>
                    <label htmlFor="peso">Peso (Kg):</label>
                    <input type="number" id="peso" placeholder="Seu peso" value={peso} onChange={e => setPeso(e.target.value)}/>
                </div>
                <div className={styles.inputAltura}>
                    <label htmlFor="altura">Altura (cm):</label>
                    <input type="number" id="altura" placeholder="Sua altura" value={altura} onChange={e => setAltura(e.target.value)}/>
                </div>
            </div>
            <button className={styles.buttonCalc} onClick={handleForm} type="button">Calcular</button>
        </div>
    )
}

export default Form 