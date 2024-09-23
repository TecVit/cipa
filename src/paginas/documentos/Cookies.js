import React, { useEffect, useState } from 'react'
import './css/Termos.css';

import { GoArrowRight, GoShieldCheck } from 'react-icons/go';
import { TiArrowRight } from 'react-icons/ti';
import { HiArrowNarrowRight, HiOutlineArrowRight } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoIosMegaphone } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { NotificationContainer, notifyError, notifySuccess } from '../../toastifyServer';
import { createReport } from '../../firebase/relatar';
import { animacoes } from '../../firebase/animacoes';
import Contact from '../../componentes/Contact';
import { BsFillPersonFill, BsPersonCircle } from 'react-icons/bs';
import { getArticles } from '../../firebase/artigos';


export default function Cookies() {

    // Animações
    useEffect(() => {
        document.title = 'Cookies | CIPA';
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);

    // Modais
    const [carregando, setCarregando] = useState(true);
    
    return (
        <main className='container-termos'>
            <NotificationContainer />

            {/* Main */}
            <section className='container-main-termos'>
                <div className='content-main-termos'>
                    <div className='text'>
                        <h1 data-animation="left" data-animation-duration="0.7s">Cookies</h1>
                        <p data-animation="left" data-animation-duration="0.8s">Atualizado: 22 de Setembro de 2024</p>
                    </div>
                </div>
            </section>


            <section className='container-termo'>
                <article className='content-termo'>
                    <div className='paragraph'>
                        <h1 data-animation="top" data-animation-duration="0.7s" className='titulo'>Coleta de Cookies</h1>
                        <p data-animation="top" data-animation-duration="0.8s" className='descricao'>Lista de cookies: Um cookie é um pequeno pedaço de dados (arquivo de texto) que um site - quando visitado por um usuário - solicita a seu navegador para armazenar em seu dispositivo, para lembrar informações sobre você, como sua preferência de idioma ou informações de login. Esses cookies são definidos por nós e são chamados de cookies primários. Também usamos cookies de terceiros - que são cookies de um domínio diferente do domínio do site que você está visitando - para os nossos esforços de publicidade e marketing. Mais especificamente, usamos cookies e outras tecnologias de rastreamento para os seguintes fins:</p>
                        <div data-animation="top" data-animation-duration="0.9s" className='artigo'>

                            <strong>Cookies estritamente necessários</strong><br/><br/>

                            Estes cookies são necessários para que o website funcione e não podem ser desligados nos nossos sistemas. Normalmente, eles só são configurados em resposta a ações levadas a cabo por si e que correspondem a uma solicitação de serviços, tais como definir as suas preferências de privacidade, iniciar sessão ou preencher formulários. Pode configurar o seu navegador para bloquear ou alertá-lo(a) sobre esses cookies, mas algumas partes do website não funcionarão. Estes cookies não armazenam qualquer informação pessoal identificável.

                            <br/><br/><strong>Cookies de desempenho</strong><br/><br/>

                            Estes cookies permitem-nos contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso website. Eles ajudam-nos a saber quais são as páginas mais e menos populares e a ver como os visitantes se movimentam pelo website. Todas as informações recolhidas por estes cookies são agregadas e, por conseguinte, anónimas. Se não permitir estes cookies, não saberemos quando visitou o nosso site.

                            <br/><br/><strong>Cookies das redes sociais</strong><br/><br/>

                            Estes cookies são estabelecidos por uma série de serviços das redes sociais que adicionamos ao website para permitir que possa partilhar o nosso conteúdo com os seus amigos e conhecidos. Eles são capazes de rastrear a sua navegação por outros websites e criar um perfil sobre os seus interesses. Isso pode afetar o conteúdo e as mensagens que vê noutros websites que visita. Se não permitir estes cookies, talvez não consiga usar ou ver essas ferramentas de partilha.

                            Esta documento é efetivo a partir de 22 de Setembro de 2024 às 20:56

                        </div>
                    </div>
                </article>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}