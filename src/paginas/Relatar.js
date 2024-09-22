import React, { useEffect, useState } from 'react'
import './css/Relatar.css';

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
import { NotificationContainer, notifyError, notifySuccess } from '../toastifyServer';
import { createReport } from '../firebase/relatar';
import { animacoes } from '../firebase/animacoes';
import Contact from '../componentes/Contact';


export default function Relatar() {

    const selects = [
        'Relato de um problema',
        'Sugestão',
        'Feedback',
        'Detalhes de um acontecimento',
        'Outro Motivo',
    ];

    // Modais
    const [carregando, setCarregando] = useState(false);
 
    // Inputs
    const [inputNome, setInputNome] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [selectMotivo, setSelectMotivo] = useState('');
    const [textareaDescricao, setTextareaDescricao] = useState('');

    const handleRelatar = async () => {
        setCarregando(true);
        try {
            if (!inputNome || !inputEmail || !selectMotivo || !textareaDescricao) {
                notifyError('Complete o formulário');
                return false;
            }

            const enviando = createReport({
                nome: inputNome,
                email: inputEmail,
                motivo: selectMotivo,
                descricao: textareaDescricao,
            });

            if (enviando) {
                notifySuccess(`${selectMotivo} enviado com sucesso`);
                setInputNome('');
                setInputEmail('');
                setSelectMotivo('');
                setTextareaDescricao('');
                return true;
            } else {
                notifyError('Houve algum erro');
                return false;
            }

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setCarregando(false);
        }
    }

    // Animações
    useEffect(() => {
        document.title = 'Relatar | CIPA';
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);

    return (
        <main className='container-relatar'>
            <NotificationContainer />

            {/* Main */}
            <section className='container-main-relatar'>
                <div className='content-main-relatar'>
                    <div className='text'>
                        <h1 data-animation="top" data-animation-duration="0.6s"><strong>Compartilhe</strong> algo de forma <strong>100%</strong> segura</h1>
                        <p data-animation="top" data-animation-duration="0.7s">Nos informe qualquer problema, sugestão ou questão que possamos te ajudar. Estamos sempre prontos para ouvir e oferecer a melhor solução para garantir a segurança e o bem-estar de todos.</p>
                    </div>
                    <div data-animation="top" data-animation-duration="0.8s" className='form'>
                        <h1>Complete o formulário</h1>
                        <div className='input'>
                            <input onChange={(e) => setInputNome(e.target.value)} value={inputNome} placeholder='Nome Completo' name='name' type='text' />
                        </div>
                        <div className='input'>
                            <input onChange={(e) => setInputEmail(e.target.value)} value={inputEmail} placeholder='exemplo@email.com' name='email' type='text' />
                        </div>
                        <div className='input'>
                            <select onChange={(e) => setSelectMotivo(e.target.value)} value={selectMotivo}>
                                <option value="">Selecione o motivo</option>
                                {selects.length > 0 && (
                                    selects.map((val, index) => {
                                        return (
                                            <option key={index} value={val}>{val}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                        <div className='input'>
                            <textarea onChange={(e) => setTextareaDescricao(e.target.value)} value={textareaDescricao} placeholder='Fale sobre o acontecimento ou sugestão'></textarea>
                        </div>
                        <button onClick={handleRelatar}>Enviar</button>
                        <p>Seu relato pode fazer a diferença e salvar vidas.</p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <Contact />

        </main>
    )
}