import Image from 'next/image'
import logo from "../../public/assets/logo.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="logo-titulo">
                <Image className="logo-imagem" src={logo} alt="Símbolo da transsexualidade, na cor preto. Que descrito, se trata de um círculo anexado a uma flecha apontada para o alto e para a direita, com outra flecha, que possui um corte horizontal, apontada para o alto e para a esquerda. E abaixo do círculo, está anexada uma cruz" />

                <h1>TransForma</h1>
            </div>

            <div className="menu">
                <a href="#">Sobre</a>
                <a href="#">Dúvidas</a>
                <a href="#">Depoimentos</a>
                <a href="#">Parcerias</a>
                <a href="#">Contato</a>
            </div>
        </div>
    )
}
