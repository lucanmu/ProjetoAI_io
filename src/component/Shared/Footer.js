import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import whiteLogo from '../../assets/images/white-logo.png'

const Footer = () => {
    return (
        <>
            <section className="sc-footer-section sc-pt-200 sc-md-pt-170 sc-sm-pt-100">
                <div className="container">
                    <div className="row padding-bottom">
                        <Fade fade delay={100}>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-about">
                                    <div className="footer-logo sc-mb-25">
                                        <Link to="#"><img src={whiteLogo} alt="FooterLogo" /></Link>
                                    </div>
                                    <p className="footer-des">Aumente Sua Produtividade Com ProjetoAI.</p>
                                    <ul className="about-icon">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="ri-facebook-fill"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="ri-twitter-fill"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="ri-instagram-fill"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="ri-pinterest-fill"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade fade delay={200}>
                            <div className="col-lg-3 col-sm-6 sc-xs-mt-40">
                                <div className="footer-menu-area sc-pl-90 sc-lg-pl-0 sc-md-pl-0 sc-md-mb-30 sc-sm-mb-0">
                                    <h4 className="footer-title white-color sc-md-mb-15">Empresa</h4>
                                    <ul className="footer-menu-list">
                                        <li><Link to="/about#">Sobre Nós</Link></li>
                                        <li><Link to="/faq#">Politica de Privacidade</Link></li>
                                        <li><Link to="/faq#">Termos e Condiçoes</Link></li>
                                        <li><Link to="/contact#">Contato</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade fade delay={300}>
                            <div className="col-lg-3 col-sm-6 sc-sm-mt-40">
                                <div className="footer-menu-area sc-pl-90 sc-lg-pl-0 sc-md-pl-0">
                                    <h4 className="footer-title white-color sc-md-mb-15">Recursos</h4>
                                    <ul className="footer-menu-list">
                                        <li><Link to="/price#">Produtos</Link></li>
                                        <li><Link to="/price#">Planos</Link></li>
                                        <li><Link to="/faq#">FAQ</Link></li>
                                        <li><Link to="/contact#">Carreira</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade fade delay={400}>
                            <div className="col-lg-3 col-sm-6 sc-sm-mt-40">
                                <div className="footer-menu-area footer-menu-area-left sc-pl-65 sc-lg-pl-0 sc-md-pl-0">
                                    <h4 className="footer-title white-color sc-md-mb-15">Entre em Cotato</h4>
                                    <ul className="footer-menu-list">
                                        <li><i className="ri-mail-fill"></i><a href="mailto:hello@yourmail.com">adm.projetoai@gmail.com</a></li>
                                        <li><i className="ri-phone-fill"></i><a href="tel:(000)123456789">+55 (11) 98604-4066</a></li>
                                        <li className="footer-map"><i className="ri-map-pin-fill"></i><span>Atibaia, SP, Brazil</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="border-top"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center">
                                    <p>&copy; {new Date().getFullYear()} <Link to="#"> ProjetoAI, </Link> Todos os direito reservado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;