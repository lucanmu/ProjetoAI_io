import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoDark from '../../assets/images/logo-dark.png'

const OffCanvasMenu = (props) => {
    const [iconToggle1, setIconToggle1] = useState(true)
    const [iconToggle2, setIconToggle2] = useState(true)
    const [iconToggle3, setIconToggle3] = useState(true)

    const { parentMenu } = props;
    const location = useLocation();

    return (
        <>
            <div className='offcanvas-area'>
                <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-menu-line"></i></Link>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <Link to="/#"><img src={logoDark} alt="DarkLogo" /></Link>
                        <button type="button" className="offcanvasClose" data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-fill"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav className="navbar navbar-light">
                            <div className="w-100">
                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <Link className={parentMenu === 'home' ? 'nav-link dactive' : 'nav-link dropdown-toggle'} to="/#"  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle1(!iconToggle1)}>
                                                Home
                                            </Link>
                                           
                                        </li>
                                        <li className="nav-item">
                                            <Link className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'} to="/blog#">Artigos</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className={parentMenu === 'serviços' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                                Serviços
                                                {iconToggle2 ? <i className="ri-add-line"></i> : <i className="ri-subtract-line"></i>}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className={location.pathname === '/services' ? 'dropdown-item active' : 'dropdown-item'} to="/services#">Produtos</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/price' ? 'dropdown-item active' : 'dropdown-item'} to="/price#">Planos</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/faq' ? 'dropdown-item active' : 'dropdown-item'} to="/faq#">FAQ</Link>
                                                </li>
                                         
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown ">
                                            <Link className={parentMenu === 'sobre' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle3(!iconToggle3)}>
                                                Sobre
                                                {iconToggle3 ? <i className="ri-add-line"></i> : <i className="ri-subtract-line"></i>}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className={location.pathname === '/blog' ? 'dropdown-item active' : 'dropdown-item'} to="/about#">Sobre Nós</Link></li>
                                                <li><Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/faq#">Politicas de Privacidade</Link></li>
                                                <li><Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/faq#">Termos de Uso</Link></li>
                                                <li><Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/contact#">Contato</Link></li>
                                                <li><Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/contact#">Carreira</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="offcanvas-icon-list">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/"><i className="ri-twitter-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/"><i className="ri-video-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;