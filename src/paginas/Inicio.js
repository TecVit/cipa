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


export default function Inicio() {
    
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    
        const darkTheme = {
          '--slateOne': '#020617',
          '--slateTwo': '#0f172a',
          '--slateThree': '#2d374b',
          '--slateFour': '#334155',
          '--slateFive': '#475569',
          '--slateSix': '#64748b',
          '--slateSeven': '#94a3b8',
          '--slateEight': '#cbd5e1',
          '--slateNine': '#e2e8f0',
          '--slateTen': '#e5ecf3',
          '--slateEleven': '#f8fafc',
          '--boxShadow': '0 1px 2px 0 rgba(0, 0, 0,.2)',
        };
    
        const lightTheme = {
          '--slateOne': '#f8fafc',
          '--slateTwo': '#e5ecf3',
          '--slateThree': '#e2e8f0',
          '--slateFour': '#cbd5e1',
          '--slateFive': '#94a3b8',
          '--slateSix': '#64748b',
          '--slateSeven': '#475569',
          '--slateEight': '#334155',
          '--slateNine': '#2d374b',
          '--slateTen': '#0f172a',
          '--slateEleven': '#020617',
          '--boxShadow': '0 1px 2px 0 rgba(255, 255, 255,.2)',
        };
    
        const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    
        for (const [key, value] of Object.entries(currentTheme)) {
          document.documentElement.style.setProperty(key, value);
        }
    };

    return (
        <main className='container-inicio'>

            {/* Main */}
            <section className='container-main-inicio'>
                <div className='content-main-inicio'>
                    <div className='text'>
                        <h1>Bem-vindo à <strong>CIPA</strong> da Diretoria de Ensino</h1>
                        <p>Promovendo a segurança e o bem-estar no ambiente escolar com ações preventivas e informativas.</p>
                        <div className='btns'>
                            <button className='btn-primary'>Saiba Mais</button>
                            <button className='btn-secondary'>
                                Relatar
                                <HiOutlineArrowRight className='seta' />
                            </button>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={Logo} alt="Logo da Cipa" />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className='container-features'>
                <div className='content-features'>
                    <div className='list'>
                        <div className='feature'>
                            <HiOutlineClipboardDocumentList className='icon' />
                            <h1>Legislação Públicas</h1>
                            <p>Documentos e legislações públicas livres para consulta online.</p>
                        </div>
                        <div className='feature'>
                            <GoShieldCheck className='icon' />
                            <h1>Proteção de Vidas</h1>
                            <p>Promovemos a segurança e proteção de vidas com os relatos dos usuários.</p>
                        </div>
                        <div className='feature'>
                            <IoIosMegaphone className='icon' />
                            <h1>Relate um acontecimento</h1>
                            <p>Relate problemas facilmente através da nossa plataforma online.</p>
                        </div>
                        <div className='feature'>
                            <BiSupport className='icon' />
                            <h1>Suporte 24 Horas</h1>
                            <p>Contate-nos 24 horas por dia, 7 dias por semana.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className='container-about'>
                <div className='content-about'>
                    <div className='image'>
                        <img src={ImageExample} alt='Foto da Diretoria de Ensino' />
                    </div>
                    <div className='text'>
                        <h1>Projeto <strong>CIPA</strong>: Segurança e Saúde no Trabalho</h1>
                        <p>O projeto CIPA da Diretoria de Ensino de <strong>Araraquara</strong> visa promover a segurança e a saúde no ambiente de trabalho, atuando na prevenção de acidentes e na conscientização dos colaboradores sobre práticas seguras.</p>
                        <div className='items'>
                            <li>
                                <FaCheck className='icon' />
                                Redução de acidentes
                            </li>
                            <li>
                                <FaCheck className='icon' />
                                Conscientização
                            </li>
                            <li>
                                <FaCheck className='icon' />
                                Saúde no trabalho
                            </li>
                            <li>
                                <FaCheck className='icon' />
                                Melhorias nas escolas
                            </li>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact */}
            <section className='container-contact'>
                <div className='content-contact'>
                    <div className='top'>
                        <h1>Faça parte desse projeto Incrível e Inovador</h1>
                        <div className='btns'>
                            <button className='btn-primary'>Saiba Mais</button>
                            <button className='btn-secondary'>
                                Relatar
                                <HiOutlineArrowRight className='seta' />
                            </button>
                        </div>
                    </div>
                    <div className='bottom'>
                        <a>Política de Privacidade</a>
                        <a>Termos de Uso</a>
                        <p>Desenvolvido por <strong>TecVit</strong></p>
                    </div>
                </div>
            </section>


        </main>
    )
}