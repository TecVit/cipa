import React, { useEffect, useState } from 'react'
import './css/Inicio.css';

// Images
import Logo from '../image/logo.png';
import ImageExample from '../image/image.png';

import { GoArrowRight, GoShieldCheck } from 'react-icons/go';
import { TiArrowRight } from 'react-icons/ti';
import { HiArrowNarrowRight, HiOutlineArrowRight } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline, IoIosMegaphone } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { animacoes } from '../firebase/animacoes';
import Contact from '../componentes/Contact';


export default function Inicio() {

    const faqs = [
        {
            pergunta: 'O que é a CIPA?',
            resposta: 'A Comissão Interna de Prevenção de Acidentes (CIPA) é um grupo formado por trabalhadores e empregadores com o objetivo de promover a segurança e a saúde no ambiente de trabalho, prevenindo acidentes.',
        },
        {
            pergunta: 'Como devo relatar um acidente que ocorreu na escola?',
            resposta: 'Você pode relatar o ocorrido acessando a página https://cipa.netlify.app/relatar e preenchendo o formulário de relato de acidentes. Certifique-se de incluir detalhes como motivo do acidente, local e descrição do acidente.',
        },
        {
            pergunta: 'Por que notificar acidentes?',
            resposta: 'Notificação de acidentes é importante para controle e prevenção de novos acidentes. Auxilia na solução do risco para que não se torne algo grave ou que se repita o acidente. Sua notificação pode salvar vidas!',
        },
        {
            pergunta: 'Quais são os principais riscos em ambientes escolares?',
            resposta: 'Os principais riscos incluem quedas, acidentes com objetos cortantes, queimaduras, e exposição a substâncias químicas, entre outros.',
        },
        {
            pergunta: 'Como os professores e funcionários podem contribuir para a segurança?',
            resposta: 'Os funcionários devem seguir as normas de segurança, participar de treinamentos, relatar condições inseguras e incentivar os alunos a adotar comportamentos seguros.',
        },
    ];

    const [statusFaqs, setStatusFaqs] = useState([Array.from({ length: 10 }, () => false)]);

    // Animações
    useEffect(() => {
        document.title = 'Início | CIPA';
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);
    
    return (
        <main className='container-inicio'>

            {/* Main */}
            <section className='container-main-inicio'>
                <div className='content-main-inicio'>
                    <div className='text'>
                        <h1 data-animation="top" data-animation-duration="0.7s">Bem-vindo à <strong>CIPA</strong> da Diretoria de Ensino de <strong>Araraquara</strong></h1>
                        <p data-animation="top" data-animation-duration="0.8s">Promovendo a segurança e o bem-estar no ambiente escolar com ações preventivas e informativas.</p>
                        <div data-animation="top" data-animation-duration="0.9s" className='btns'>
                            <button onClick={() => window.location.href = "/sobre"} className='btn-primary'>Saiba Mais</button>
                            <button onClick={() => window.location.href = "/relatar"} className='btn-secondary'>
                                Relatar
                                <HiOutlineArrowRight className='seta' />
                            </button>
                        </div>
                    </div>
                    <div data-animation="top" data-animation-duration="0.8s" className='image'>
                        <img src={Logo} alt="Logo da Cipa" />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className='container-features'>
                <div className='content-features'>
                    <div className='list'>
                        <div data-animation="top" data-animation-duration="0.6s" className='feature'>
                            <HiOutlineClipboardDocumentList className='icon' />
                            <h1>Legislação</h1>
                            <p>Documentos e legislações públicas livres para consulta online.</p>
                        </div>
                        <div data-animation="top" data-animation-duration="0.8s" className='feature'>
                            <GoShieldCheck className='icon' />
                            <h1>Proteção de Vidas</h1>
                            <p>Promovemos a segurança e proteção de vidas com os relatos dos usuários.</p>
                        </div>
                        <div data-animation="top" data-animation-duration="1.0s" className='feature'>
                            <IoIosMegaphone className='icon' />
                            <h1>Relate um acontecimento</h1>
                            <p>Relate problemas facilmente através da nossa plataforma online.</p>
                        </div>
                        <div data-animation="top" data-animation-duration="1.2s" className='feature'>
                            <BiSupport className='icon' />
                            <h1>Suporte / Atendimento</h1>
                            <p>Entre em contato conosco a qualquer momento para assistência imediata.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className='container-about'>
                <div className='content-about'>
                    <div data-animation data-animation-duration="1.0s" className='image'>
                        <img src={ImageExample} alt='Foto da Diretoria de Ensino' />
                    </div>
                    <div className='text'>
                        <h1 data-animation="top" data-animation-duration="0.6s">Projeto <strong>CIPA</strong>: Segurança e Saúde no Trabalho</h1>
                        <p data-animation="top" data-animation-duration="0.7s">O projeto CIPA da Diretoria de Ensino de <strong>Araraquara</strong> visa promover a segurança e a saúde no ambiente de trabalho, atuando na prevenção de acidentes e na conscientização dos colaboradores sobre práticas seguras.</p>
                        <div className='items'>
                            <li data-animation="top" data-animation-duration="0.8s">
                                <FaCheck className='icon' />
                                Redução de acidentes
                            </li>
                            <li data-animation="top" data-animation-duration="0.9s">
                                <FaCheck className='icon' />
                                Conscientização
                            </li>
                            <li data-animation="top" data-animation-duration="1.0s">
                                <FaCheck className='icon' />
                                Saúde no trabalho
                            </li>
                            <li id='faq' data-animation="top" data-animation-duration="1.1s">
                                <FaCheck className='icon' />
                                Melhorias nas escolas
                            </li>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className='container-faq'>
                <div className='content-faq'>
                    <h1 data-animation="top" data-animation-duration="0.8s">Perguntas Frequentes</h1>
                    <p data-animation="top" data-animation-duration="0.9s">Tudo o que você precisa saber</p>
                    <div className='list'>
                        {faqs.length > 0 && (
                            faqs.map((val, i) => (
                                <li data-animation="top" data-animation-duration={`1.${i}s`} onClick={() => setStatusFaqs((prev) => {
                                    let list = [...prev];
                                    list[i] = !list[i];
                                    return list;
                                })} key={i}>
                                    <div className='top'>
                                        <h1>{val.pergunta}</h1>
                                        {statusFaqs[i] ? (
                                            <IoIosCloseCircleOutline className='icon' />
                                        ) : (
                                            <IoIosAddCircleOutline className='icon' />
                                        )}
                                    </div>
                                    {statusFaqs[i] && (
                                        <p>{val.resposta}</p>
                                    )}
                                </li>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}