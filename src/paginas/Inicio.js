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
import { IoIosMegaphone } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { animacoes } from '../firebase/animacoes';
import Contact from '../componentes/Contact';


export default function Inicio() {

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
                            <button className='btn-primary'>Saiba Mais</button>
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
                            <li data-animation="top" data-animation-duration="1.1s">
                                <FaCheck className='icon' />
                                Melhorias nas escolas
                            </li>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}