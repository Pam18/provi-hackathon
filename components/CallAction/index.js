import Image from 'next/image';
import Link from 'next/link';
import simboloTrans from "../../public/assets/simboloTrans.svg";
import manchaRoxaLateral from "../../public/assets/mancha-roxa-lateral.svg"
import manchaVerdeLateral from "../../public/assets/mancha-verde-lateral.svg";


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
                        <Link href="#">Iniciar cadastro</Link>
                    </button>
                }
                {
                    props.texto
                    &&
                    <span className="guia-texto">{props.texto}</span>
                }
            </div>

            {
                props.imagem
                &&
                <Image className="logo-imagem" src={simboloTrans} alt="Símbolo da transsexualidade, na cor roxo. Que descrito, se trata de um círculo anexado a uma flecha apontada para o alto e para a direita, com outra flecha, que possui um corte horizontal, apontada para o alto e para a esquerda. E abaixo do círculo, está anexada uma cruz" />
            }

            <span className="imagem-roxa-lateral" >
                <Image src={manchaRoxaLateral} alt="uma macha roxa, que faz parte do design" />
            </span>

            <span className="imagem-verde-lateral">
                <Image src={manchaVerdeLateral} alt="uma macha verde, que faz parte do design" />
            </span>
        </div>
    )
}