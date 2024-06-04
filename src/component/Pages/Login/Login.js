import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import LoginPage from './LoginPage';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Login = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Login' />
            <LoginPage />
            <Apps />
            <Footer />
        </>
    );
};

export default Login;