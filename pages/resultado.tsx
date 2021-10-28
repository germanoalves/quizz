import styles from '../styles/Resultado.module.css'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'
import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Resultado() {

    
    let corFundoPercentualAcertos = () => {
        if(percentual <= 33) {
            return "#de6a33";
        }else if (percentual >= 33 && percentual <= 66) {
            return "#ffa500";
        }else{
            return "#9cd2a4";
        }
    }

    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)
    const errou = total - certas
    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex" }}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4"/>
                <Estatistica texto="Erradas" valor={errou} corFundo="#EB3B52"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo={corFundoPercentualAcertos()}/>
            </div>
            <Botao href="/" texto="Tentar Novamente" />
        </div>
    )
}