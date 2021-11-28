import Image from 'next/image'
import simboloTrans from "../../public/assets/simboloTrans.svg"

export default function CallAction(props) {
    return (
        <div id="sobre" className="info-imagem">
            <div className="informacoes">
                <span>{props.subtitulo ? props.subtitulo : ""}</span>

                <h1>{props.titulo}</h1>

                <div className="paragrafos">
                    <p>{props.children ? props.children : ""}</p>
                </div>
                {
                    props.botao
                    &&
                    <button className="botao">
                        <a href="#">Iniciar cadastro</a>
                    </button>
                }
                {
                    props.span
                    &&
                    <span className="guia-span">props.span</span>
                }
            </div>

            {
                props.imagem
                &&
                <Image className="logo-imagem" src={simboloTrans} alt="Símbolo da transsexualidade, na cor roxo. Que descrito, se trata de um círculo anexado a uma flecha apontada para o alto e para a direita, com outra flecha, que possui um corte horizontal, apontada para o alto e para a esquerda. E abaixo do círculo, está anexada uma cruz" />
            }
        </div>
    )
}