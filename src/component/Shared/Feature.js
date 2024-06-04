import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import featureImage from '../../assets/images/feature/feature_img.png'
import featureImage1 from '../../assets/images/feature/feature_img1.png'

const Feature = (props) => {
    const { bgYellow } = props;
    return (
        <>
            <section className={`${bgYellow} sc-feature-section-area sc-pt-110 sc-md-pt-70 sc-pb-70 sc-md-pb-35`}>
                <div className="container">
                    <div className="row align-items-center">
                        <Fade bottom delay={100}>
                            <div className="col-lg-6">
                                <div className="sc-feature-item sc-pr-90">
                                    <div className="sc-heading-area sc-mb-30">
                                        <h2 className="heading-title">Benefícios da Utilização da I.A na Criação de Documentos</h2>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                            <svg width="50px" 
                                            height="50px" 
                                            viewBox="0 0 1024 1024" 
                                            class="icon"  v
                                            ersion="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 301.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37" />
                                            <path d="M400.3 744.5c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z m0 0c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z" fill="#39393A" />
                                            <path d="M511.8 256.6c24.4 0 44.2 19.8 44.2 44.2S536.2 345 511.8 345s-44.2-19.8-44.2-44.2 19.9-44.2 44.2-44.2m0-20c-35.5 0-64.2 28.7-64.2 64.2s28.7 64.2 64.2 64.2 64.2-28.7 64.2-64.2-28.7-64.2-64.2-64.2z" fill="#E73B37" />
                                            <path d="M730.7 529.5c0.4-8.7 0.6-17.4 0.6-26.2 0-179.6-86.1-339.1-219.3-439.5-133.1 100.4-219.2 259.9-219.2 439.5 0 8.8 0.2 17.5 0.6 26.1-56 56-90.6 133.3-90.6 218.7 0 61.7 18 119.1 49.1 167.3 30.3-49.8 74.7-90.1 127.7-115.3 39-18.6 82.7-29 128.8-29 48.3 0 93.9 11.4 134.3 31.7 52.5 26.3 96.3 67.7 125.6 118.4 33.4-49.4 52.9-108.9 52.9-173.1 0-85.4-34.6-162.6-90.5-218.6zM351.1 383.4c9.2-37.9 22.9-74.7 40.6-109.5a502.1 502.1 0 0 1 63.6-95.9c17.4-20.6 36.4-39.9 56.8-57.5 20.4 17.6 39.4 36.9 56.8 57.5 24.8 29.5 46.2 61.8 63.6 95.9 17.7 34.8 31.4 71.6 40.6 109.5 8.7 35.8 13.5 72.7 14.2 109.9C637.4 459 577 438.9 512 438.9c-65 0-125.3 20.1-175.1 54.4 0.7-37.2 5.5-74.1 14.2-109.9z m-90.6 449.2c-9.1-27-13.7-55.5-13.7-84.4 0-35.8 7-70.6 20.8-103.2 8.4-19.8 19-38.4 31.9-55.5 9.7 61.5 29.5 119.7 57.8 172.6-36.4 17.8-69 41.6-96.8 70.5z m364.2-85.3c-0.7-0.3-1.5-0.5-2.2-0.8-0.4-0.2-0.9-0.3-1.3-0.5-0.6-0.2-1.3-0.5-1.9-0.7-0.8-0.3-1.5-0.5-2.3-0.8-0.8-0.3-1.5-0.5-2.3-0.7l-0.9-0.3c-1-0.3-2.1-0.7-3.1-1-1.2-0.4-2.4-0.7-3.5-1.1l-3-0.9c-0.2-0.1-0.4-0.1-0.7-0.2-1.1-0.3-2.3-0.7-3.4-1-1.2-0.3-2.4-0.6-3.5-0.9l-3.6-0.9-3.6-0.9c-1-0.3-2.1-0.5-3.1-0.7-1.2-0.3-2.4-0.5-3.6-0.8-1.3-0.3-2.5-0.6-3.8-0.8h-0.3c-0.9-0.2-1.9-0.4-2.8-0.6-0.4-0.1-0.7-0.1-1.1-0.2-1.1-0.2-2.2-0.4-3.4-0.6-1.2-0.2-2.4-0.4-3.6-0.7l-5.4-0.9c-0.9-0.1-1.9-0.3-2.8-0.4-0.8-0.1-1.6-0.3-2.5-0.4-2.6-0.4-5.1-0.7-7.7-1-1.2-0.1-2.3-0.3-3.5-0.4h-0.4c-0.9-0.1-1.8-0.2-2.8-0.3-1.1-0.1-2.1-0.2-3.2-0.3-1.7-0.2-3.4-0.3-5.1-0.4-0.8-0.1-1.5-0.1-2.3-0.2-0.9-0.1-1.9-0.1-2.8-0.2-0.4 0-0.8 0-1.2-0.1-1.1-0.1-2.1-0.1-3.2-0.2-0.5 0-1-0.1-1.5-0.1-1.3-0.1-2.6-0.1-3.9-0.1-0.8 0-1.5-0.1-2.3-0.1-1.2 0-2.4 0-3.5-0.1h-13.9c-2.3 0-4.6 0.1-6.9 0.2-0.9 0-1.9 0.1-2.8 0.1-0.8 0-1.5 0.1-2.3 0.1-1.4 0.1-2.8 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.4-0.6 0-1.2 0.1-1.8 0.2l-7.8 0.9c-1.1 0.1-2.1 0.3-3.2 0.4-1 0.1-2.1 0.3-3.1 0.4-3.2 0.5-6.4 0.9-9.5 1.5-0.7 0.1-1.4 0.2-2.1 0.4-0.9 0.1-1.7 0.3-2.6 0.5-1.1 0.2-2.3 0.4-3.4 0.6-0.9 0.2-1.7 0.3-2.6 0.5-0.4 0.1-0.8 0.1-1.1 0.2-0.7 0.1-1.4 0.3-2.1 0.4-1.2 0.3-2.4 0.5-3.6 0.8-1.2 0.3-2.4 0.5-3.6 0.8-0.2 0-0.4 0.1-0.6 0.1-0.5 0.1-1 0.2-1.5 0.4-1.1 0.3-2.3 0.6-3.5 0.9-1.3 0.3-2.5 0.6-3.8 1-0.4 0.1-0.9 0.2-1.4 0.4-1.3 0.4-2.7 0.7-4 1.1-1.5 0.4-3 0.9-4.6 1.3-1 0.3-2.1 0.6-3.1 1-2.1 0.6-4.1 1.3-6.2 2-0.7 0.2-1.4 0.5-2.1 0.7-15-27.5-27.4-56.4-37-86.2-11.7-36.1-19.2-73.6-22.5-111.6-0.6-6.7-1-13.3-1.3-20-0.1-1.2-0.1-2.4-0.1-3.6-0.1-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.7 18.8-14 39.2-25.8 61-35 36.1-15.3 74.5-23 114.1-23 39.6 0 78 7.8 114.1 23 21.8 9.2 42.2 20.9 61 35v0.1c0 1 0 1.9-0.1 2.9 0 1.4-0.1 2.8-0.1 4.3 0 0.7 0 1.3-0.1 2-0.1 1.8-0.1 3.5-0.2 5.3-0.3 6.7-0.8 13.3-1.3 20-3.3 38.5-11 76.5-23 113-9.7 30.3-22.3 59.4-37.6 87.1z m136.8 90.9a342.27 342.27 0 0 0-96.3-73.2c29.1-53.7 49.5-112.8 59.4-175.5 12.8 17.1 23.4 35.6 31.8 55.5 13.8 32.7 20.8 67.4 20.8 103.2 0 31-5.3 61.3-15.7 90z" fill="#39393A" /><path d="M512 819.3c8.7 0 24.7 22.9 24.7 60.4s-16 60.4-24.7 60.4-24.7-22.9-24.7-60.4 16-60.4 24.7-60.4m0-20c-24.7 0-44.7 36-44.7 80.4 0 44.4 20 80.4 44.7 80.4s44.7-36 44.7-80.4c0-44.4-20-80.4-44.7-80.4z" fill="#E73B37"/>
                                            </svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">Eficiência</Link></h4>
                                            <div className="description sc-mb-25">A inteligência artificial agiliza o processo de criação de documentos, automatizando tarefas repetitivas e permitindo foco em atividades estratégicas.

</div>
                                        </div>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                            <svg width="50px" 
                                            height="50x" 
                                            viewBox="0 0 1024 1024" 
                                            class="icon"  
                                            version="1.1" 
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path d="M601.5 531.8h278.8v16H601.5zM639.3 657.4h224v16h-224zM686.8 779h160.8v16H686.8z" fill="#F73737" /><path d="M216.3 927.8H62.2V425.6h155.4l-1.3 502.2z m-110.1-44h66.2l1.1-414.2h-67.3v414.2zM822.1 927.8H268.9l-0.4-502L633.3 96.2l85.2 91.5-66.8 196.7h310L822.1 927.8z m-509.3-44H788l117-455.4H655.8l-65.5-0.1 78.1-229.9-37.8-40.5-318.1 287.4 0.3 438.5z" fill="#353535" /></svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">Precisão</Link></h4>
                                            <div className="description sc-mb-25">Reduz erros e garante informações atualizadas e consistentes, melhorando a qualidade dos documentos produzidos.</div>
                                        </div>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                        <svg width="50px" 
                                        height="50px" 
                                        viewBox="0 0 1024 1024" 
                                        class="icon"  
                                        version="1.1" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M928.1 881v44H95.9V99h44v782z" fill="#39393A" /><path d="M352 435.7v403.4H204V435.7h148m22-22H182v447.4h192V413.7zM608 307.9v531.2H460V307.9h148m22-22H438v575.2h192V285.9z" fill="#39393A" /><path d="M866.1 177.3v663.9H714V177.3h152.1m20-20H694v703.9h192V157.3h0.1z" fill="#E73B37" /></svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">Análise de Dados</Link></h4>
                                            <div className="description sc-mb-25">Capacidade de analisar grandes volumes de dados para extrair insights valiosos, resultando em documentos mais informativos e completos.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={200}>
                            <div className="col-lg-6">
                                <div className="feature-image-area shake-y">
                                    <img className="feature-img" src={featureImage} alt="Feature" />
                                    <img className="feature-img_1 pulse" src={featureImage1} alt="Feature" />
                                    <div className="feature-shape left-right-rotate"></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;