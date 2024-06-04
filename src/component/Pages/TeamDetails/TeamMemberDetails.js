import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialIcon from '../../Shared/SocialIcon';
import teamImg1 from '../../../assets/images/team/team_img1.png'

const TeamMemberDetails = () => {
    return (
        <>
            <section>
                <div className="sc-team-details-pages-area sc-pt-140 sc-md-pt-80 sc-pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-content-box text-center sc-md-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg1} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="#">Lucas Muniz</Link></h4>
                                        <span className="sc-mb-0">Arquiteto de Soluções</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-area">
                                    <div className="details-area">
                                        <div className="team-author">
                                            <h2>Lucas Muniz</h2>
                                            <h3>Arquiteto de Soluções e CEO da ProjetoAI</h3>
                                            <ul className="personal-info">
                                                <li>
                                                    <i className="ri-mail-line"></i>
                                                    <a href="mailto:hello@yourmail.com">adm.projetoai@gmail.com</a>
                                                </li>
                                                <li>
                                                    <i className="ri-phone-fill"></i>
                                                    <a href="tel:+00222444555">+55 11 98604-4066</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-rating">
                                            <ul className="rating-list">
                                                <li>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>

                                                    {/*TEXTO ao lado das estrelas*/}


                                                </li>
                                                <li>

                                                    {/*TEXTO ao lado das estrelas*/}


                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="sc-mb-25">Sobre Mim</h3>
                                        <div className="description sc-mb-15">
                                        Especialista em tecnologia com certificações em RPA, AWS, AZ e OCI. Com vasta experiência em consultoria de tecnologia, especializado em cloud em nuvem, desenvolvimento e análise de sistemas, automação. Habilidade de desenvolver projetos complexos, além de fornecer treinamento para atender às demandas do mercado.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamMemberDetails;