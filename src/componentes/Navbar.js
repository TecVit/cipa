import React, { useEffect, useState } from 'react'
import './css/Navbar.css';

// Images
import Logo from '../image/logo.png';
import { IoIosArrowDown, IoIosMegaphone } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { animacoes } from '../firebase/animacoes';
import { deleteCookie, getCookie, setCookie } from '../firebase/cookies';

export default function Navbar() {

    const navigate = useNavigate();

    // Tema Dark / Light
    const darkCookie = getCookie('dark') || false;
    const [isDarkTheme, setIsDarkTheme] = useState(darkCookie);
    
    const toggleTheme = () => {
        let newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        
        const lightTheme = {
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
    
        const darkTheme = {
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
    
        const currentTheme = newTheme ? darkTheme : lightTheme;
    
        for (const [key, value] of Object.entries(currentTheme)) {
          document.documentElement.style.setProperty(key, value);
        }
    
        setCookie('dark', !isDarkTheme);
    };

    const [mdPaginas, setMdPaginas] = useState(false);

    // Animações
    useEffect(() => {
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);

    return (
        <header data-animation data-animation-duration="0.6s" className='container-navbar'>
            <div className='content-navbar'>
                <img onClick={() => window.location.href = "/"} src={Logo} alt="Logo da Cipa" />
                <nav className='links'>
                    <a href='/#'>Início</a>
                    <a onMouseEnter={() => setMdPaginas(true)}>
                        Páginas
                        <IoIosArrowDown className='seta'/>
                    </a>
                    <a href='/blog'>Blog</a>
                </nav>
                <div className='btns'>
                    {/* Switch */}
                    <div className="input">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => toggleTheme()}
                                className="switch"
                                checked={isDarkTheme ? true : false}
                            />
                        </label>
                    </div>
                    <button onClick={() => window.location.href = "/relatar"}>
                        <IoIosMegaphone className='icon' />
                        Relatar
                    </button>
                </div>
                
                {/* Modal Páginas */}
                {mdPaginas && (
                    <div onMouseEnter={() => setMdPaginas(true)} onMouseLeave={() => setMdPaginas(false)} className='modal-paginas'>
                        <div className='link'>
                            <h1>Informações</h1>
                            <a>Email</a>
                            <a>Telefone</a>
                            <a>Whatsapp</a>
                        </div>
                        <div className='link'>
                            <h1>Regulamento</h1>
                            <a>Normas</a>
                            <a>Eventos</a>
                            <a>Eleições</a>
                            <a>Legislação</a>
                        </div>
                        <div className='link'>
                            <h1>‎ </h1>
                            <a href='/cookies#'>Cookies</a>
                            <a href='/termos-de-uso#'>Termos de Uso</a>
                            <a href='/politica-de-privacidade#'>Política de Privacidade</a>
                        </div>
                        <div className='link'>
                            <h1>Links</h1>
                            <a href='/#'>Início</a>
                            <a href='/blog#'>Blog</a>
                            <a href='/#faq'>FAQ</a>
                            <a href='/sobre#'>Sobre Nós</a>
                        </div>
                        <div className='link'>
                            <h1>Integrantes</h1>
                            <a>Diretores</a>
                            <a>Coordenadores</a>
                            <a>Desenvolvedor</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
