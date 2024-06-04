import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import ServiceFeature from './ServiceFeature';
import ServiceBlog from '../../Shared/ServiceBlog';
import ServiceFaq from './ServiceFaq';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Services = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Services' />
            <ServiceFeature />
            <ServiceBlog />
            <ServiceFaq />
            <Apps />
            <Footer />
        </>
    );
};

export default Services;