import Image from 'next/image';
import { useEffect, useState } from 'react';
import CallAction from '../../components/CallAction';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import checkPoint from '../../public/assets/check.svg';
import iconeOk from '../../public/assets/icone-ok.svg';


export default function Guia() {
    const [toggleCheck, setToggleCheck] = useState(false);
    const [toggleId, setToggleId] = useState(0);

    const arrayInformacoes = [
        {
            id: 0,
            novoTitulo: "1 - Começar separando os documentos:",
            novoTexto: "O primeiro passo para dar início à retificação do seu registro é reunir todos os documentos exigidos pelo Provimento nº 73/2018 do CNJ. Fizemos uma lista ao final deste guia com todos os documentos necessários."
        },

        {
            id: 1,
            novoTitulo: "2 - Checar a data de emissão das certidões de nascimento e de casamento (se for o caso):",
            novoTexto: "As certidões podem ter, no máximo, 90 dias. Caso as suas tenham sido emitidas há mais tempo, procure o cartório em que foi registrado/a ou o que você se casou para obter uma certidão atualizada."

        },

        {
            id: 2,
            novoTitulo: "3 - Emitir as outras certidões    online:",
            novoTexto: "A maior parte das certidões requeridas pode ser emitida gratuitamente pela internet. No capítulo contendo a lista de documentos deste guia você encontra os links referentes ao estado de São Paulo e alguns dos links para outros estados. Se elas vencerem você pode reemitir no site, mas na data de entrega dos documentos no cartório todas elas precisam estar válidas."

        },

        {
            id: 3,
            novoTitulo: "4 - Solicitar a certidão dos Cartórios de Protesto:",
            novoTexto: "Esta certidão é a única que é paga. Se você não puder arcar com a taxa (em São Paulo ela é de R$133,90), agende um horário na Defensoria Pública do seu estado e solicite a gratuidade na emissão. Em alguns estados a emissão pode ser solicitada pela internet."
        },

        {
            id: 4,
            novoTitulo: "5 - Reunir os demais documentos exigidos:",
            novoTexto: "Além das certidões, o provimento exige o RG, o CPF, o título de eleitor e o comprovante de residência. Caso você tenha passaporte, pode levá-lo também. Quando você tiver todos esses documentos e todas as certidões em mãos, é hora de ir ao cartório."
        },

        {
            id: 5,
            novoTitulo: "6 - Elaborar o Requerimento de Alteração De Registro Civil:",
            novoTexto: "O Provimento nº 73/2018, que regulamenta a retificação, determina que deve ser assinado um requerimento de acordo com o modelo estipulado pela norma. Em alguns casos o requerimento é fornecido pelo cartório, em outros casos não. Por isso, disponibilizamos neste guia o modelo de requerimento presente no Provimento nº 73/2018 para que as pessoas interessadas em fazer a retificação possam levá-lo em mãos ao cartório, evitando contratempos."
        },

        {
            id: 6,
            novoTitulo: "7 - Certidão de Arquivamento de Processo Judicial de Retificação de Nome e Marcador de Gênero (se aplicável):",
            novoTexto: "Se a pessoa interessada em fazer a retificação tiver entrado com um processo judicial no passado para fazer isso, ela deverá comprovar que o processo foi arquivado para poder retificar administrativamente no cartório. Portanto, não é possível pedir para retificar no cartório enquanto o processo judicial não tiver sido arquivado. Essa comprovação é feita apresentando no cartório a “Certidão de Arquivamento de Processo Judicial de Retificação de Nome e Marcador de Gênero”. Isso só será necessário para aqueles que tiverem ingressado no judiciário para fazer a retificação."
        },

        {
            id: 7,
            novoTitulo: "8 - Levar a documentação completa ao Cartório de Registro de Pessoas mais próximo de sua residência:",
            novoTexto: "Com todos os documentos você já pode dar entrada no pedido de retificação do registro civil.Os cartórios exigem o pagamento de uma taxa que, em São Paulo, varia entre R$130, 00 e R$140, 00(taxa de averbação).Se você não puder arcar com essa taxa, procure a Defensoria Pública do Estado(DPE) para obter a gratuidade.As certidões podem ter, no máximo, 90 dias.Caso as suas tenham sido emitidas há mais tempo, procure o cartório em que foi registrado / a ou o que você se casou para obter uma certidão atualizada."
        }
    ];

    function handleChangeCheckVisibility(event) {

        if (event.target.id === "") {
            return;
        } else {
            setToggleCheck(!toggleCheck);
            setToggleId(event.target.id);
        }

    }

    useEffect(() => {
        const caixasCheckbox = document.querySelectorAll('.ok');

        if (caixasCheckbox) {
            if (toggleCheck) {
                caixasCheckbox[Number(toggleId)].classList.value = "ok";
            } else {
                caixasCheckbox[Number(toggleId)].classList.value = "ok hidden";
            }
        }
    }, [toggleCheck, toggleId]);

    return (
        <div>
            <Header />
            <CallAction
                subtitulo={false}
                titulo="Guia de retificação do nome e/ou gênero"
                botao={false}
                texto="Este passo a passo foi elaborado por nós, da Transcender, para te ajudar a conseguir os documentos necessários para a Retificação de PRENOME e GÊNERO nos seus documentos."
                imagem={false}
            />

            {
                arrayInformacoes.map(item => {
                    return (
                        <div key={item.id} className="passo">
                            <div
                                id={item.id}
                                className="status"
                                onClick={(e) => handleChangeCheckVisibility(e)}>

                                <span
                                    id={item.id}
                                    className="check">

                                    <Image
                                        id={item.id}
                                        src={checkPoint}
                                        alt="caixa de seleção para marcar o item executado"
                                        width={80}
                                    />
                                </span>

                                <span
                                    id={item.id}
                                    className="ok hidden">

                                    <Image
                                        id={item.id}
                                        src={iconeOk}
                                        alt="icone verde, para indicar que o item foi executado"
                                        width={40}
                                    />
                                </span>
                            </div>

                            <div className="passo-texto">
                                <h4>{item.novoTitulo}</h4>
                                <span>{item.novoTexto}</span>
                            </div>

                        </div>
                    )
                })
            }

            <Footer />

        </div>
    )
}