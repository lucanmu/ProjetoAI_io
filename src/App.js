import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/assets/fonts/remixicon.css';
import '../src/assets/css/style.css';

import { AuthProvider } from './component/Shared/AuthContext.js';  // Atualize o caminho conforme necessário
import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
import Blog from './component/Pages/Blog/Blog';
import BlogDetails from './component/Pages/Blog/BlogDetails';
import Services from './component/Pages/Services/Services';
import Price from './component/Pages/Price/Price';
import Team from './component/Pages/Team/Team';
import TeamDetails from './component/Pages/TeamDetails/TeamDetails';
import Faq from './component/Pages/Faq/Faq';
import Login from './component/Pages/Login/Login';
import SignUp from './component/Pages/SignUp/SignUp';
import Error404 from './component/Pages/Error404/Error404';
import ScrollUpBtn from './component/Shared/ScrollUpBtn';
import UploadAudio from './component/Pages/Upload/UploadAudio.js';
import Popup from './component/Pages/Upload/Popup.js';
import ActivatePage from './component/Pages/SignUp/ActivatePage';
import ResetPasswordPage from './component/Pages/Login/ResetPasswordPage.js';
import ResetPasswordPageConfirm from './component/Pages/Login/ResetPasswordPageConfirm.js';
import LoginPage from './component/Pages/Login/LoginPage';

function App() {
  return (
    <AuthProvider>
    <div>
      <Helmet>
        <title>ProjetoAI | Produtividade com IA</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <Routes>
        <Route path='/upload-audio' element={<UploadAudio />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-details' element={<BlogDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/price' element={<Price />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team-details' element={<TeamDetails />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordPageConfirm />} />
        <Route path='/activate/:uid/:token' element={<ActivatePage />} />

        <Route path='*' element={<Error404 />} />
      </Routes>
      
      <ScrollUpBtn />
      <ToastContainer />
    </div>
    </AuthProvider>
  );
}

export default App;
