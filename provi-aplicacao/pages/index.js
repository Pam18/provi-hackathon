import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import CallAction from '../components/CallAction';

import styles from '../styles/Home.module.css'
import manchaRoxaSuperior from "../public/assets/mancha-roxa-superior.svg"
import manchaVerdeSuperior from "../public/assets/mancha-verde-superior.svg"
import manchaRoxaLateral from "../public/assets/mancha-roxa-lateral.svg"
import manchaVerdeLateral from "../public/assets/mancha-verde-lateral.svg"

export default function Home() {
  return (
    <div>
      <span className={styles.imagemRoxaSuperior} >
        <Image src={manchaRoxaSuperior} alt="uma macha roxa, que faz parte do design" />
      </span>

      <span className={styles.imagemVerdeSuperior}>
        <Image src={manchaVerdeSuperior} alt="uma macha verde, que faz parte do design" />
      </span>

      <span className={styles.imagemRoxaLateral} >
        <Image src={manchaRoxaLateral} alt="uma macha roxa, que faz parte do design" />
      </span>

      <span className={styles.imagemVerdeLateral}>
        <Image src={manchaVerdeLateral} alt="uma macha verde, que faz parte do design" />
      </span>

      <Header />

      <CallAction
        subtitulo="O seu direito"
        titulo="Ao nome proprio"
        botao={true}
        imagem={true}
      >
        O portal TransForma nasceu com a missão de auxiliar pessoas trans a dar vários passos importantes na sua trajetória de vida, como a retificação do seu nome em cartório, ter o apoio de pessoas e empresas na sua qualificação profissional e educacional. O nome nasceu com o trocadilho de trans e forma, no sentido de transformação de qualidade de vida das pessoas trans de todo o Brasil.<br />
        O direito ao próprio nome caminha junto com a diminuição de algumas das violências sofridas por pessoas trans e não binárias e garantir esse direito dando apoio em cada etapa do processo é garantir a cidadania dessas pessoas e o senso de existência na sociedade.<br />
        Aqui você acessa um passo a passo sobre como retificar seu nome e gênero em sua documentação. Acompanha o status da sua solicitação, tem ajuda profissional para diversos temas e questões, um grupo de apoio e de vagas de emprego.
      </CallAction>
    </div>
  )
}
