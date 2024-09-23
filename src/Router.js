import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './componentes/Navbar';

// Pages
import Inicio from './paginas/Inicio';
import Relatar from './paginas/Relatar';
import Blog from './paginas/Blog';
import Termos from './paginas/documentos/Termos';
import Privacidade from './paginas/documentos/Privacidade';


// Erros
import Error404 from './paginas/Erro404';

// Toastify
import { notifySuccess, notifyError, NotificationContainer } from './toastifyServer';
import 'react-toastify/dist/ReactToastify.css';
import './css/customToastify.css';

import { useNavigate } from 'react-router-dom';
import { clearCookies, deleteCookie, getCookie, setCookie } from './firebase/cookies';
import Cookies from './paginas/documentos/Cookies';


const RouterApp = () => {

  const darkCookie = getCookie('dark') || false;
  const [isDarkTheme, setIsDarkTheme] = useState(darkCookie ? JSON.parse(darkCookie) : false);

  const toggleTheme = () => {
    
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

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    for (const [key, value] of Object.entries(currentTheme)) {
      document.documentElement.style.setProperty(key, value);
    }

  };

  useEffect(() => {
    toggleTheme();
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/relatar" element={<Relatar />} />
        
        {/* Documentos */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/cookies" element={<Cookies />} />
        
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );

}

export default RouterApp;