import Image from 'next/image';
import logo from "../../public/assets/logo.svg";

import ifood from "../../public/assets/ifood.svg";
import vtex from "../../public/assets/vtex.svg";
import xpinc from "../../public/assets/xpinc.svg";
import arco from "../../public/assets/arco.svg";
import provi from "../../public/assets/provi.svg";
import saoPaulo from "../../public/assets/sao-paulo.svg";

export default function Footer() {
    return (
        <div id="contato" className="container-footer">
            <div className="empresa-contato">
                <div className="logo">
                    <span>
                        <Image className="logo" src={logo} alt="Símbolo da transsexualidade, na cor preto. Que descrito, se trata de um círculo anexado a uma flecha apontada para o alto e para a direita, com outra flecha, que possui um corte horizontal, apontada para o alto e para a esquerda. E abaixo do círculo, está anexada uma cruz" />

                    </span>
                    <h1>Transceder</h1>
                </div>

                <div className="contato">
                    <div className="sao-paulo">
                        <h4>São Paulo</h4>
                        <span>
                            Rua Augusta, 2916 <br />
                            Jardins <br />
                            Telefone: (11) 5855-5558
                        </span>
                    </div>
                    <div className="rio-de-janeiro">
                        <h4>Rio de Janeiro</h4>
                        <span>
                            Rua Siquiera Campos, 171 <br />
                            Copacabana <br />
                            Telefone: (21) 5555-5555
                        </span>
                    </div>
                </div>
            </div>

            <div className="empresas-parceiras">
                <h4>Empresas parceiras:</h4>

                <div className="empresas">
                    <div>
                        <Image src={ifood} alt="logo do ifood em vermelho" height={80} />
                        <Image src={vtex} alt="logo da vtex em rosa" height={80} />
                        <Image src={xpinc} alt="logo da xpinc em preto e cinza" height={80} />
                    </div>

                    <div>
                        <Image src={arco} alt="logo da arco" height={80} />
                        <Image src={provi} alt="logo da provi" height={80} />
                        <Image src={saoPaulo} alt="logo da cidade de São Paulo" height={80} />
                    </div>
                </div>
            </div>
        </div>
    )
}