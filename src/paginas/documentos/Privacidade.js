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


export default function Privacidade() {

    // Animações
    useEffect(() => {
        document.title = 'Política de Privacidade | CIPA';
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
                        <h1 data-animation="left" data-animation-duration="0.7s">Política de Privacidade</h1>
                        <p data-animation="left" data-animation-duration="0.8s">Atualizado: 22 de Setembro de 2024</p>
                    </div>
                </div>
            </section>


            <section className='container-termo'>
                <article className='content-termo'>
                    <div className='paragraph'>
                        <h1 data-animation="top" data-animation-duration="0.7s" className='titulo'>Política de Privacidade</h1>
                        <p data-animation="top" data-animation-duration="0.8s" className='descricao'>A sua privacidade é importante para nós. É política do CIPA respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site CIPA, e outros sites que possuímos e operamos.</p>
                        <div data-animation="top" data-animation-duration="0.9s" className='artigo'>

                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            
                            <br/><br/>

                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            <br/><br/>

                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            <br/><br/>

                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                            <br/><br/>

                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                            <br/><br/>

                            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                            <br/><br/>

                            <span><strong>1.1</strong> - O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</span> 
                            <br/><br/>
                            <span><strong>1.2</strong> - Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</span>
                            <br/><br/>
                            <span><strong>1.3</strong> - Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</span>
                            <br/><br/>
                            <span><strong>1.4</strong> - Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</span>
                            
                            <br/><br/><strong>Compromisso do Usuário</strong><br/><br/>

                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o CIPA oferece no site e com caráter enunciativo, mas não limitativo:
                            
                            <br/><br/>
                            <span><strong>(A)</strong> - Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span> 
                            <br/><br/>
                            <span><strong>(B)</strong> - Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
                            <br/><br/>
                            <span><strong>(C)</strong> - Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do CIPA, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>

                            <br/><br/><strong>Mais Informações</strong><br/><br/>

                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                            <br/><br/>

                            Esta política é efetiva a partir de 22 de Setembro de 2024 às 20:52

                        </div>
                    </div>
                </article>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}