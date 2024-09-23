import React, { useEffect, useState } from 'react'
import './css/Blog.css';

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
import { BsFillPersonFill, BsPersonCircle } from 'react-icons/bs';
import { getArticles } from '../firebase/artigos';
import { FaCalendarDays } from 'react-icons/fa6';


export default function Blog() {

    const truncate = (str, limit) => {
        return str.length > limit ? str.slice(0, limit - 1) + "..." : str;
    };

    const diasDesdeData = (dataPassada) => {
        const [dia, mes, ano] = dataPassada.split('/').map(Number);
        const dataInicio = new Date(ano, mes - 1, dia);
        const dataAtual = new Date();
      
        const diffTime = Math.abs(dataAtual - dataInicio);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertendo de milissegundos para dias
      
        return diffDays;
    };

    // Animações
    useEffect(() => {
        document.title = 'Blog | CIPA';
        animacoes();
        window.addEventListener('scroll', animacoes);
        return () => {
            window.removeEventListener('scroll', animacoes);
        };
    }, []);

    // Modais
    const [carregando, setCarregando] = useState(true);
    const [mdArtigo, setMdArtigo] = useState(false);
    
    const [artigos, setArtigos] = useState([]);
    const [artigoInfo, setArtigoInfo] = useState({});

    useEffect(() => {
        const coletarArtigos = async () => {
            setCarregando(true);
            try {
                const artigosList = await getArticles();
                if (artigosList.length > 0) {
                    setArtigos(artigosList);
                    setTimeout(() => {
                        animacoes();
                    }, 100);
                    return true;
                }
                return false;
            } catch (error) {
                console.log(error);
                return false;
            } finally {
                setCarregando(false);
            }
        }
        coletarArtigos();
    }, []);
      

    return (
        <main className='container-blog'>
            <NotificationContainer />


            {carregando ? (
                <div className='loader grande green my-50'></div>
            ) : artigos.length > 0 && !carregando && !mdArtigo ? (
                <>
                    {/* Main */}
                    <section style={{ backgroundImage: artigos[0].fundo }} className='container-main-blog'>
                        <div className='content-main-blog'>
                            <div className='text'>
                                <div data-animation="left" data-animation-duration="0.8s" className='profile'>
                                    {artigos[0].imagem ? (
                                        <img src={artigos[0].imagem} />
                                    ) : (
                                        <BsPersonCircle className='icon' />
                                    )}
                                    <p>{artigos[0].nome}</p>
                                </div>
                                <h1 data-animation="left" data-animation-duration="0.7s">{truncate(artigos[0].descricao, 100)}</h1>
                                <button onClick={() => {
                                    setArtigoInfo(artigos[0]);
                                    setMdArtigo(true);
                                    setTimeout(() => {
                                        window.location.href = "/blog#";
                                    }, 50);
                                }} data-animation="left" data-animation-duration="0.6s">
                                    Ler Artigo
                                    <HiOutlineArrowRight className='seta' />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* List Blog */}
                    <section className='container-list-blog'>
                        <div className='content-list-blog'>
                            <h1 data-animation="top" data-animation-duration="0.7s">Artigos Publicados</h1>
                            <p data-animation="top" data-animation-duration="0.8s">Fique por dentro das informações do projeto e suas conquistas.</p>
                            <div data-animation="top" data-animation-duration="0.9s" className='list'>
                                {artigos.map((val, index) => (
                                    <article className='article' key={index}>
                                        <div style={{ backgroundImage: val.fundo }} className='image'>
                                            {val.imagem ? (
                                                <img src={val.imagem} />
                                            ) : (
                                                <BsPersonCircle className='icon' />
                                            )}
                                            <p>{val.nome}</p>
                                        </div>
                                        <h1>{val.titulo}</h1>
                                        <p>{val.descricao}</p>
                                        <a onClick={() => {
                                            setArtigoInfo(val);
                                            setMdArtigo(true);
                                            setTimeout(() => {
                                                window.location.href = "/blog#";
                                            }, 50);
                                        }}>Ler Mais <HiOutlineArrowRight className='seta' /> </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ) : artigos.length <= 0 && (
                <h2>Nenhum artigo encontrado</h2>
            )}

            {mdArtigo && (
                <section className='container-article'>
                    <article className='content-article'>
                        <div className='profile'>
                                {artigoInfo.imagem ? (
                                    <img src={artigoInfo.imagem} />
                                ) : (
                                    <BsPersonCircle className='icon' />
                                )}<div className='text'>
                                <h1>{artigoInfo.nome}</h1>
                                <p> <FaCalendarDays className='icon' /> {diasDesdeData(artigoInfo.data)} Dias atrás</p>
                            </div>
                        </div>
                        <div className='paragraph'>
                            <h1 className='titulo'>{artigoInfo.titulo}</h1>
                            <p className='descricao'>{artigoInfo.descricao}</p>
                            <div className='artigo' dangerouslySetInnerHTML={{ __html: artigoInfo.artigo }} />
                        </div>
                    </article>
                </section>
            )}
            

            {/* Contact */}
            <Contact />

        </main>
    )
}