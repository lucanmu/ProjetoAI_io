import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import UploadAudioForm from './UploadAudioForm';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';
import About from '../About/About';
import AboutUs from '../../Shared/AboutUs';

const UploadAudio = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Selecione a Melhor Maneira de Iniciar Seu Projeto' />
            <UploadAudioForm />
            <AboutUs />
            <Footer />
        </>
    );
};

export default UploadAudio;