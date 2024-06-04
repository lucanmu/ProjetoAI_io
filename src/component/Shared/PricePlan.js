import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const PricePlan = () => {
    let [priceToggle, setPriceToggle] = useState(true)
    return (
        <>
            <section className="sc-price-area gray-bg sc-pt-125 sc-md-pt-65 sc-pb-140 sc-md-pb-80">
                <div className="container">
                    <div className="sc-heading-area sc-mb-40 sc-md-mb-30 text-center">
                        <h2 className="title sc-mb-25">Preços Transparentes</h2>
                        <span className="sub_title">Sem Taxas Ocultas, Sem Limites</span>
                    </div>
                    <div className="pricing-selector">
                        <form >
                            <button type="button" className="pricing-monthly-btn">Mensal</button>
                            <input type="checkbox" name="pricing-selector" id="pricing-selector" onChange={() => setPriceToggle(!priceToggle)} />
                            <button type="button" className="pricing-yearly-btn">Anual <span>(35% Off)</span></button>
                        </form>
                    </div>
                    <div className={`${priceToggle ? 'pricing-monthly' : 'pricing-monthly d-none'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Grátis</h4>
                                            <div className="price-active">$0.00<span className="month"> - Mensal</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Teste</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Limitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Limitado.</li>
                                                
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span>Teste Grátis</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30" >
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Basico</h4>
                                            <div className="price-active price">$49.99<span className="month"> - Mensal</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Uso Pessoal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Limitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Limitado.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos a Partir dos Textos Transcritos.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Acesso Prioritário ao Suporte Por E-mail.</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span>Assinar</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Pro</h4>
                                            <div className="price-active price">$69.99<span className="month"> - Mensal</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Uso Profissional</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Ilimitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Ilimitado.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos a Partir dos Textos Transcritos.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Acesso Prioritário ao Suporte Por Chat.</li>
                                                
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span >Assinar</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={`${priceToggle ? 'pricing-yearly d-none' : 'pricing-yearly'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Free</h4>
                                            <div className="price-active">$00.00<span className="month"> - Anual</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Testes</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Limitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Limitado.</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span>Teste Grátis</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Basico</h4>
                                            <div className="price-active price">$89.99<span className="month"> - Anual</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Uso Pessoal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Limitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Limitado.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos a Partir dos Textos Transcritos.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Acesso Prioritário ao Suporte Por E-mail.</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span>Assinar</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Pro</h4>
                                            <div className="price-active price">$99.99<span className="month"> - Anual</span></div>
                                        </div>
                                        <div className="perfect-title">Ideal Para Uso Profissional</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>Transcrição Ilimitada.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos Ilimitado.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Criação de Documentos a Partir dos Textos Transcritos.</li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Acesso Prioritário ao Suporte Por Chat.</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/signup#"><span>Assinar</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricePlan;