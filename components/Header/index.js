/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import logo from "../../public/assets/logo.svg";
import manchaRoxaSuperior from "../../public/assets/mancha-roxa-superior.svg"
import manchaVerdeSuperior from "../../public/assets/mancha-verde-superior.svg";

export default function Header() {
    return (
        <div className="header">
            <span className="imagem-roxa-superior" >
                <Image src={manchaRoxaSuperior} alt="uma macha roxa, que faz parte do design" />
            </span>

            <span className="imagem-verde-superior">
                <Image src={manchaVerdeSuperior} alt="uma macha verde, que faz parte do design" />
            </span>

            <div className="logo-titulo">
                <a href="/">
                    <Image className="logo-imagem" src={logo} alt="Símbolo da transsexualidade, na cor preto. Que descrito, se trata de um círculo anexado a uma flecha apontada para o alto e para a direita, com outra flecha, que possui um corte horizontal, apontada para o alto e para a esquerda. E abaixo do círculo, está anexada uma cruz" />

                    <h1>Transcender</h1>
                </a>
            </div>

            <div className="menu">
                <a href="/#sobre">Sobre</a>
                <a href="/#duvidas">Dúvidas</a>
                <a href="/#depoimentos">Depoimentos</a>
                <a href="/#parcerias">Parcerias</a>
                <a href="/#contato">Contato</a>
            </div>
        </div>
    )
}

