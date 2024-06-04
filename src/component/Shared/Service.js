import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const Service = () => {
    return (
        <>
            <section className="sc-service-section-area7 sc-pt-140 sc-md-pt-70 sc-pb-140 sc-md-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="sc-heading-area text-center sc-mb-60">
                                <h2 className="heading-title">Por onde <span className="dark-green-color-projetia">Começar</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Fade bottom delay={100}>
                                <div className="sc-service-content-box text-center sc-md-mb-30">
                                    <div className="sc-text-area">
                                        <div className="service-icon">
                                            {/*SVG DE NECESSIDADES ABAIXO*/}

                                                <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M393.3 768H392h1.3z" fill="#405925" />
                                                    <path d="M511.9 199.6C355.7 199.6 229 326.2 229 482.5c0 103.8 55.9 194.6 139.3 243.8v89.8c0 1.3 0 2.5 0.1 3.8 0.1 3.2 0.3 6.4 0.6 9.6 6.8 72.8 68.6 130.3 143.1 130.3 39.5 0 75.4-16.2 101.5-42.2 23-23 38.3-53.8 41.6-87.9 0.3-3.2 0.5-6.4 0.6-9.6 0-1.3 0.1-2.7 0.1-4v-90l0.6-0.3C739.4 676.5 795 586 795 482.5c-0.2-156.3-126.8-282.9-283.1-282.9zM391.9 768h1.3-1.3z m219.8 48.1c0 5.8-0.5 11.5-1.5 17-1.1 6.5-2.9 12.8-5.3 18.9-5 12.7-12.6 24.5-22.6 34.5-18.9 18.9-43.9 29.3-70.4 29.3-26.5 0-51.5-10.4-70.4-29.3-10-10-17.7-21.8-22.7-34.6-2.4-6.1-4.1-12.4-5.2-18.9-1-5.5-1.4-11.2-1.4-16.9v-8.8h199.4v8.8z m0-24.8H412.3v-47.7h199.4v47.7z m69.1-139.9c-7.8 7.8-15.9 14.9-24.5 21.4-13.7 10.4-28.4 19.3-44 26.5l-0.6 0.3v0.1H412.3c-15.4-7.1-29.9-15.7-43.4-25.8-9.1-6.8-17.7-14.3-25.9-22.5-22-22-39.2-47.5-51.2-75.9-12.5-29.4-18.8-60.7-18.8-93s6.3-63.5 18.8-93c12-28.4 29.3-54 51.2-76 22-22 47.5-39.2 76-51.2 29.4-12.4 60.7-18.7 93-18.7s63.6 6.3 93 18.7c28.4 12 54 29.3 76 51.2 22 22 39.2 47.5 51.2 76 12.4 29.4 18.8 60.7 18.8 93s-6.3 63.5-18.8 93c-12.2 28.4-29.4 53.9-51.4 75.9z" fill="#405925" />
                                                    <path d="M391.9 768h1.3-1.3z" fill="#405925" />
                                                    <path d="M511.9 432.3c-39.7 0-72 32.3-72 72 0 37.3 28.6 68.1 65 71.7v123.7h14V576c36.4-3.5 65-34.3 65-71.7 0-39.7-32.3-72-72-72z m0 128c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z" fill="#eeea1e" />
                                                    <path d="M512 103.6m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill="#405925" />
                                                    <path d="M244.2 214.5m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill="#405925" />
                                                    <path d="M133.3 482.2m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill="#405925" />
                                                    <path d="M890.7 482.2m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill="#405925" />
                                                    <path d="M779.8 214.5m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill="#405925" />
                                                </svg>

                                            {/*SVG DE NECESSIDADES ACIMA*/}

                                        </div>
                                        <h4 className="sc-mb-20"><Link className="title">Necessidade</Link></h4>
                                        <p className="des">Tem um projeto ou ideia para documentar?</p>
                                    </div>
                                    <div className="sc-text-number">
                                        <span className="sc-number">1</span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" >
                            <Fade bottom delay={200}>
                                <div className="sc-service-content-box text-center sc-md-mb-30">
                                    <div className="sc-text-area">
                                        <div className="service-icon">

                                            {/*SVG DE ABRIR CONTA ABAIXO*/}
                                            <svg
                                                width="35"
                                                height="35"
                                                viewBox="0 0 23 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.5001 0C8.12183 0 5.36659 2.74789 5.36659 6.11778C5.36659 9.4874 8.12156 12.2356 11.5001 12.2356C14.8784 12.2356 17.6337 9.4874 17.6337 6.11778C17.6337 2.74816 14.8787 0 11.5001 0ZM11.5001 1.52928C14.0497 1.52928 16.1001 3.57439 16.1001 6.11744C16.1001 8.6605 14.0497 10.7056 11.5001 10.7056C8.95053 10.7056 6.90015 8.6605 6.90015 6.11744C6.90015 3.57439 8.95053 1.52928 11.5001 1.52928ZM11.5001 13.7646C5.15487 13.7646 0 18.7277 0 24.9006V26H1.53321V24.9006C1.53321 19.5744 5.95248 15.294 11.5 15.294C17.0474 15.294 21.4668 19.5744 21.4668 24.9006V26H23V24.9006C23 18.7276 17.8451 13.7646 11.4999 13.7646H11.5001Z"
                                                    fill="#405925"
                                                />
                                            </svg>
                                            {/*SVG DE ABRIR CONTA ACIMA*/}
                                        </div>
                                        <h4 className="sc-mb-20"><Link className="title" to="/signup#">Planos</Link></h4>
                                        <p className="des">Escolha o plano adequado com sua necessidade.</p>
                                    </div>
                                    <div className="sc-text-number">
                                        <span className="sc-number">2</span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" >
                            <Fade bottom delay={300}>
                                <div className="sc-service-content-box text-center sc-md-mb-30">
                                    <div className="sc-text-area">
                                        <div className="service-icon">
                                            
                                            {/*SVG DE Enviar ABAIXO*/}
                                            <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M220.5 245.4c-32.8 32.8-55.1 73.2-65.2 117.3h16.5c18.8-75.3 75.1-135.9 148-160.7v-16.9c-37.1 11.6-71 32-99.3 60.3z" fill="#eeea1e" /><path d="M959.9 540.8c0 113.6-92.1 205.8-205.7 205.9H590.9v-44h163.3c43.2 0 83.8-16.9 114.3-47.4 30.6-30.6 47.4-71.2 47.4-114.5 0-43.2-16.8-83.9-47.4-114.4S797.2 379 754 379c-11.5 0-22.8 1.2-33.8 3.5-15 3.2-29.4 8.4-42.8 15.7-1-15.4-3.3-30.7-6.8-45.6v-0.1c-3.6-15.6-8.6-30.8-14.9-45.7-14.4-33.9-34.9-64.4-61.1-90.6-26.2-26.2-56.6-46.7-90.6-61.1-35.1-14.8-72.4-22.4-110.9-22.4s-75.8 7.5-110.9 22.4c-33.9 14.3-64.4 34.9-90.6 61.1-26.2 26.2-46.7 56.7-61.1 90.6-14.9 35.1-22.4 72.4-22.4 110.9s7.5 75.8 22.4 110.9c14.3 33.9 34.9 64.4 61.1 90.6 26.2 26.2 56.7 46.7 90.6 61.1 35.1 14.8 72.4 22.4 110.9 22.4h39.7v44h-41C210.7 746 64.1 599 64.1 417.7c0-181.7 147.3-329 329-329 154.6 0 284.3 106.6 319.5 250.3v0.1c13.4-2.7 27.2-4.2 41.4-4.2 113.7 0.1 205.9 92.2 205.9 205.9z" fill="#405925" /><path d="M692.9 636.1h-22.6L519.8 485.6v449.6h-16V485.8L353.4 636.1h-22.6l181-181z" fill="#405925" /></svg>
                                            {/*SVG DE Enviar ACIMA*/}
                                        </div>
                                        <h4 className="sc-mb-20"><Link className="title" to="/login#">Diga-nos</Link></h4>
                                        <p className="des">Envie o arquivo de audio ou digite sua necessidade.</p>
                                    </div>
                                    <div className="sc-text-number">
                                        <span className="sc-number">3</span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" >
                            <Fade bottom delay={400}>
                                <div className="sc-service-content-box text-center sc-md-mb-30">
                                    <div className="sc-text-area">
                                        <div className="service-icon">
                                            {/*SVG DE DOCUMENTAÇÃO ABAIXO*/}
                                            <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M719.8 651.8m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#405925" /><path d="M512.1 64H172v896h680V385.6L512.1 64z m278.8 324.3h-280v-265l280 265zM808 916H216V108h278.6l0.2 0.2v296.2h312.9l0.2 0.2V916z" fill="#39393A" /><path d="M280.5 530h325.9v16H280.5z" fill="#39393A" /><path d="M639.5 530h90.2v16h-90.2z" fill="#405925" /><path d="M403.5 641.8h277v16h-277z" fill="#eeea1e" /><path d="M280.6 641.8h91.2v16h-91.2z" fill="#405925" /><path d="M279.9 753.7h326.5v16H279.9z" fill="#eeea1e" /><path d="M655.8 753.7h73.9v16h-73.9z" fill="#405925" /></svg>
                                            {/*SVG DE DOCUMENTAÇÃO ACIMA*/}
                                        </div>
                                        <h4 className="sc-mb-20"><Link className="title" to="/login#">Documentação</Link></h4>
                                        <p className="des">Receba o documento estruturado.</p>
                                    </div>
                                    <div className="sc-text-number">
                                        <span className="sc-number">4</span>
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

export default Service;