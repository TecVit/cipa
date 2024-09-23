import React, { useEffect, useState } from 'react'
import './css/Contact.css';

// Images
import Logo from '../image/logo.png';
import { IoIosArrowDown, IoIosMegaphone } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { animacoes } from '../firebase/animacoes';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function Contact() {

    const navigate = useNavigate();

    // Animações
    useEffect(() => {
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);

    return (
        <section data-animation data-animation-duration="0.9s" className='container-contact'>
            <div className='content-contact'>
                <div className='top'>
                    <img className='logo' src={Logo} />
                    <div className='btns'>
                        <button onClick={() => window.location.href = "/sobre#"} className='btn-primary'>Saiba Mais</button>
                        <button onClick={() => window.location.href = "/relatar#"} className='btn-secondary'>
                            Relatar
                            <HiOutlineArrowRight className='seta' />
                        </button>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='links'>
                        <a>Política de Privacidade</a>
                        <a>Termos de Uso</a>
                    </div>
                    <p>Desenvolvido por <strong>TecVit</strong></p>
                </div>
            </div>
        </section>
    )
}