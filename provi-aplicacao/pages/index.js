import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import CallAction from '../components/CallAction';

import styles from '../styles/Home.module.css';

import manchaRoxaSuperior from "../public/assets/mancha-roxa-superior.svg";
import manchaVerdeSuperior from "../public/assets/mancha-verde-superior.svg";
import manchaRoxaLateral from "../public/assets/mancha-roxa-lateral.svg";
import manchaVerdeLateral from "../public/assets/mancha-verde-lateral.svg";

import bandeiras from "../public/assets/bandeiras.svg";
import listaNumero from "../public/assets/lista-numero.svg";
import tempo from "../public/assets/tempo.svg";
import interrogacao from "../public/assets/interrogacao.svg";

import mural from "../public/assets/mural.svg";
import rede from "../public/assets/rede.svg";
import cadastro from "../public/assets/cadastro.svg";
import seta from "../public/assets/seta.svg";

import bandeiraTrans from "../public/assets/bandeira-trans.svg";
import pessoaTrans from "../public/assets/pessoa-trans.svg";
import aspas from "../public/assets/aspas.svg";
import setaEsquerda from "../public/assets/seta-cinza-esquerda.svg";
import setaDireita from "../public/assets/seta-preta-direita.svg";


export default function Home() {
  return (
    <div className={styles.container}>
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
        titulo="Ao nome próprio"
        botao={true}
        imagem={true}
      >
        O portal TransForma nasceu com a missão de auxiliar pessoas trans a dar vários passos importantes na sua trajetória de vida, como a retificação do seu nome em cartório, ter o apoio de pessoas e empresas na sua qualificação profissional e educacional. O nome nasceu com o trocadilho de trans e forma, no sentido de transformação de qualidade de vida das pessoas trans de todo o Brasil.<br />
        O direito ao próprio nome caminha junto com a diminuição de algumas das violências sofridas por pessoas trans e não binárias e garantir esse direito dando apoio em cada etapa do processo é garantir a cidadania dessas pessoas e o senso de existência na sociedade.<br />
        Aqui você acessa um passo a passo sobre como retificar seu nome e gênero em sua documentação. Acompanha o status da sua solicitação, tem ajuda profissional para diversos temas e questões, um grupo de apoio e de vagas de emprego.
      </CallAction>

      <div id="duvidas" className={styles.cardRetificacao}>
        <span className={styles.imagemBandeiras}>
          <Image src={bandeiras} alt="imagem com fundo branco. Com mãos levantando bandeiras trans, nas cores azul, rosa e branco"></Image>
        </span>

        <div className={styles.passoAPasso}>
          <span>Como conseguir</span>
          <h2>Minha retificação</h2>

          <button className={styles.listaNumero}>
            <a href="#">
              <div className={styles.listaNumero}>
                <Image src={listaNumero} alt="ícone de uma lista enumerada" />
              </div>
              <span>Passo a passo</span>
            </a>
          </button>

          <button className={styles.tempo}>
            <a href="#">
              <div className={styles.tempoImagem}>
                <Image src={tempo} alt="ícone de um relógio" />
              </div>
              <span>Status das solicitações</span>
            </a>
          </button>

          <button className={styles.interrogacao}>
            <a href="#">
              <div className={styles.interrogacao}>
                <Image src={interrogacao} alt="um  ponto de interrogação" />
              </div>
              <span>Dúvidas frequentes</span>
            </a>
          </button>
        </div>
      </div>

      <div className={styles.servicos}>
        <span>Conheça nossos outros</span>
        <h2>Serviços</h2>

        <div className={styles.miniCards}>
          <div className={styles.mural}>
            <div className={styles.imagemMural}>
              <Image src={mural} alt="imagem de um cadastro" />
              <span>Mural de vagas</span>
            </div>

            <a className={styles.seta} href="#">
              <Image src={seta} alt="seta verde apontando para a direita" />
            </a>
          </div>

          <div className={styles.redes}>
            <div className={styles.imagemRede}>
              <Image src={rede} alt="imagem de pessoas se abraçando" />
              <span>Rede de apoio</span>
            </div>

            <a className={styles.seta} href="#">
              <Image src={seta} alt="seta verde apontando para a direita" />
            </a>
          </div>

          <div className={styles.cadastro}>
            <div className={styles.imagemCadastro}>
              <Image src={cadastro} alt="imagem de um cadastro marcado" />
              <span>Cadastro de empresas</span>
            </div>

            <a className={styles.seta} href="#">
              <Image src={seta} alt="seta verde apontando para a direita" />
            </a>
          </div>
        </div>
      </div>

      <div id="depoimentos" className={styles.depoimentos}>
        <div>
          <span className={styles.bandeiraTrans}>
            <Image
              src={bandeiraTrans}
              alt="imagem de uma mão levantando a bandeira trans, nas cores azul, rosa e branco"
              width={500}
            />
          </span>

          <span className={styles.pessoaTrans}>
            <Image
              src={pessoaTrans}
              alt="imagem de uma mulher"
              width={480}
            />
          </span>
        </div>

        <div className={styles.depo}>
          <h2>Não acreditei que nós podemos usar nosso nome legalmente</h2>

          <div className={styles.imagemDepo}>
            <span className={styles.aspas}>"</span>

            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. ”
              </p>

              <div className={styles.rodapeDepo}>
                <div className={styles.infoDepo}>
                  <span className={styles.nome}>Gabriela Sampaio</span>
                  <span className={styles.periodo}>Usuária desde 2021</span>
                </div>

                <div className={styles.passarDepo}>
                  <a href="#">
                    <Image src={setaEsquerda} alt="imagem de uma mão levantando a bandeira trans, nas cores azul, rosa e branco" />
                  </a>

                  <a href="#">
                    <Image src={setaDireita} alt="imagem de uma mão levantando a bandeira trans, nas cores azul, rosa e branco" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
