import {useEffect, useState} from 'react';
import styles from './Formulario.module.css'

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [classificacao, setClassificacao] = useState('')

    altura = altura/100
    altura **= 2

    const imc = peso / altura

    useEffect(() => {
        if(imc < 18.5){
            setClassificacao('Magreza')
        } else if(imc < 24.9){
            setClassificacao('Normal')
        } else if(imc < 29.9){
            setClassificacao('Sobrepeso')
        } else if(imc < 39.9){
            setClassificacao('Obesidade')
        } else if(imc > 40){
            setClassificacao('Obesidade grave')
        }
    },[imc])



    return (
        <>
            <form onSubmit={(event) => event.preventDefault()} className={styles.formulario}>
                <input className={styles.formularioInput} type="number" onChange={e => setAltura(parseInt(e.target.value))}  placeholder="Digite sua altura(em centímetros):" />
                <input className={styles.formularioInput} type="number" onChange={e => setPeso(parseInt(e.target.value))} placeholder="Digite seu peso:" />
            </form>
                {imc >= 0 && (
                    <div>
                        <p className={styles.resultado}>Seu IMC é: {imc.toFixed(2)}</p>
                        <p className={styles.resultado}>Você está com: {classificacao}</p>
                    </div>
                )}
        </>
    )
}

export default Formulario