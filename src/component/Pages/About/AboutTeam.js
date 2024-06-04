import React from 'react';
import aboutImg1 from '../../../assets/images/about/ab_img.png'
import aboutImg2 from '../../../assets/images/about/ab_img1.png'
import aboutImg3 from '../../../assets/images/about/ab_img2.png'

const AboutTeam = () => {
    return (
        <>
            <section>
                <div className="about-team-pages-area sc-pt-130 sc-md-pt-70 sc-pb-180 sc-md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 p-z-idex">
                                <div className="sc-heading-area sc-mb-105 sc-md-mb-60 text-center">
                                    <span className="sc-sub-title primary-color">Conheça Nossa Jornada</span>
                                    <br></br>
                                    <h2 className="heading-title sc-mb-25">A ProjetoAI é uma startup inovadora que visa revolucionar a forma como os projetos são documentados.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="description sc-mb-20">
                            <p><strong>Criação de Documentos na ProjetoAI</strong></p>
                            <p>A ProjetoAI oferece uma solução completa para a criação de documentos em projetos. Com nossa plataforma, você pode facilmente elaborar documentos burocráticos, como propostas técnicas e requisitos, de forma rápida e eficiente.</p>
                            <p>Nossa tecnologia de inteligência artificial ajuda a consolidar todas as informações necessárias para seus documentos, garantindo precisão e consistência. Além disso, oferecemos modelos pré-definidos e personalizáveis para atender às necessidades específicas do seu projeto.</p>
                            <p>Com a ProjetoAI, você pode:</p>
                            <ul>
                                <li>Criar documentos técnicos e de requisitos de forma rápida e precisa.</li>
                                <li>Acessar modelos pré-definidos para agilizar o processo de criação.</li>
                                <li>Colaborar com sua equipe na elaboração e revisão de documentos.</li>
                                <li>Garantir a qualidade e consistência dos seus documentos.</li>
                            </ul>
                            <p>Simplifique a criação de documentos em seus projetos com a ProjetoAI. Experimente hoje mesmo!</p>

                            <p><strong>Transcrição de Áudio na ProjetoAI</strong></p>
                            <p>A transcrição de áudio é uma funcionalidade essencial da ProjetoAI, que permite transformar gravações de áudio em texto de forma rápida e precisa. Com nossa plataforma, você pode transcrever reuniões, entrevistas, palestras e muito mais com apenas alguns cliques.</p>
                            <p>Nossa tecnologia de inteligência artificial garante alta precisão na transcrição, permitindo que você capture com precisão todas as informações importantes discutidas em áudio. Além disso, oferecemos ferramentas de edição e formatação para que você possa ajustar o texto transcrição conforme necessário.</p>
                            <p>Com a transcrição de áudio da ProjetoAI, você pode:</p>
                            <ul>
                                <li>Registrar e documentar facilmente conversas importantes.</li>
                                <li>Acessar rapidamente informações discutidas em reuniões e entrevistas.</li>
                                <li>Gerar automaticamente atas de reuniões e relatórios detalhados.</li>
                                <li>Facilitar a comunicação e colaboração entre equipes distribuídas.</li>
                            </ul>
                            <p>Simplifique a transcrição de áudio em seus projetos com a ProjetoAI!</p>
                        <br></br>
                        <br></br>
                        </div>
                        <div className="row position-relative">
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center sc-md-mb-30">
                                    <img src={aboutImg1} alt="About" />
                                </div>
                            </div>
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center sc-md-mb-30">
                                    <img src={aboutImg2} alt="About" />
                                </div>
                            </div>
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center">
                                    <img src={aboutImg3} alt="About" />
                                </div>
                            </div>
                            <div className="sc-ab-circle purple"></div>
                            <div className="sc-ab-circle yelow"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTeam;
