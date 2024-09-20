import React, { useState } from 'react'
import './css/Navbar.css';

// Images
import Logo from '../image/logo.png';
import { IoIosArrowDown, IoIosMegaphone } from 'react-icons/io';

export default function Navbar() {

    const [mdPaginas, setMdPaginas] = useState(false);

    return (
        <header className='container-navbar'>
            <div className='content-navbar'>
                <img onClick={() => window.location.href = "/"} src={Logo} alt="Logo da Cipa" />
                <nav className='links'>
                    <a href='/#'>Início</a>
                    <a onMouseEnter={() => setMdPaginas(true)}>
                        Páginas
                        <IoIosArrowDown className='seta'/>
                    </a>
                    <a>Redes Sociais</a>
                </nav>
                <button>
                    <IoIosMegaphone className='icon' />
                    Relatar
                </button>

                {/* Modal Páginas */}
                {mdPaginas && (
                    <div onMouseEnter={() => setMdPaginas(true)} onMouseLeave={() => setMdPaginas(false)} className='modal-paginas'>
                        <div className='link'>
                            <h1>Empresa</h1>
                            <a>Sobre nós</a>
                            <a>Telefone</a>
                            <a>Instagram</a>
                            <a>Facebook</a>
                            <a>Whatsapp</a>
                        </div>
                        <div className='link'>
                            <h1>Regulamento</h1>
                            <a>Eleições</a>
                            <a>Eventos</a>
                            <a>Legislação</a>
                            <a>Normas</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
