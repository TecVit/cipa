import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './componentes/Navbar';

// Pages
import Inicio from './paginas/Inicio';

// Erros
import Error404 from './paginas/Erro404';

// Toastify
import { notifySuccess, notifyError, NotificationContainer } from './toastifyServer';
import 'react-toastify/dist/ReactToastify.css';
import './css/customToastify.css';

import { useNavigate } from 'react-router-dom';
import { clearCookies, deleteCookie, getCookie, setCookie } from './firebase/cookies';

const RouterApp = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );

}

export default RouterApp;