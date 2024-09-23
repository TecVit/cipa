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


export default function Termos() {

    // Animações
    useEffect(() => {
        document.title = 'Termos de Uso | CIPA';
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
                        <h1 data-animation="left" data-animation-duration="0.7s">Termos de Uso</h1>
                        <p data-animation="left" data-animation-duration="0.8s">Atualizado: 22 de Setembro de 2024</p>
                    </div>
                </div>
            </section>


            <section className='container-termo'>
                <article className='content-termo'>
                    <div className='paragraph'>
                        <h1 data-animation="top" data-animation-duration="0.7s" className='titulo'>Termos de Uso</h1>
                        <p data-animation="top" data-animation-duration="0.8s" className='descricao'>Bem-vindo ao <strong>CIPA</strong>! Ao acessar e utilizar nossos serviços, você concorda com os seguintes Termos de Uso. Este documento tem como objetivo definir as regras e condições para o uso do nosso site, serviços e conteúdos, garantindo uma relação transparente e segura.</p>
                        <div data-animation="top" data-animation-duration="0.9s" className='artigo'>

                            <strong>1. Termos</strong><br /><br />
            
                            Ao acessar ao site CIPA, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                            
                            <br /><br /><strong>2. Uso de Licença</strong><br /><br />

                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site CIPA , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
                            
                                <br/><br/>
                            
                                <span><strong>2.1</strong> - Modificar ou copiar os materiais;</span> 
                                <br/>
                                <span><strong>2.2</strong> - Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</span> 
                                <br/>
                                <span><strong>2.3</strong> - Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site CIPA;</span> 
                                <br/>
                                <span><strong>2.4</strong> - Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</span> 
                                <br/>
                                <span><strong>2.5</strong> - Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</span> 
                                
                                <br/><br/>

                            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por CIPA a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                            <br /><br /><strong>3. Isenção de responsabilidade</strong><br /><br />

                                <span><strong>3.1</strong> - Os materiais no site da CIPA são fornecidos 'como estão'. CIPA não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</span> 
                                <br/>
                                <span><strong>3.2</strong> - Além disso, o CIPA não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span> 

                            <br /><br /><strong>4. Limitações</strong><br /><br />

                            Em nenhum caso o CIPA ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em CIPA, mesmo que CIPA ou um representante autorizado da CIPA tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.

                            <br /><br /><strong>5. Precisão dos materiais</strong><br /><br />

                            Os materiais exibidos no site da CIPA podem incluir erros técnicos, tipográficos ou fotográficos. CIPA não garante que qualquer material em seu site seja preciso, completo ou atual. CIPA pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, CIPA não se compromete a atualizar os materiais.

                            <br /><br /><strong>6. Links</strong><br /><br />

                            O CIPA não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por CIPA do site. O uso de qualquer site vinculado é por conta e risco do usuário.

                            <br /><br /><strong>Modificações</strong><br /><br />

                            O CIPA pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                            
                            <br /><br /><strong>Lei Aplicável</strong><br /><br />

                            Estes termos e condições são regidos e interpretados de acordo com as leis do CIPA e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                            <br/><br/>

                            Estes Termos é efetivo a partir de 22 de Setembro de 2024 às 20:52
                        </div>
                    </div>
                </article>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}