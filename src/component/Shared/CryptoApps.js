import React from 'react';
import { Fade } from 'react-reveal';
import crytoImageTwo from '../../assets/images/feature/cryto-image-two.png'

const CryptoApps = () => {
    return (
        <>
            <section className="sc-crupto-style-three sc-pt-35">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade right>
                                <div className="sc-crupto-content-two sc-pr-80 sc-md-pr-0 sc-sm-pr-0 sc-md-mb-45">
                                    <div className="sc-heading-area sc-mb-20">
                                        <h2 className="heading-title sc-mb-25 white-color">
                                            Download Our App Start Your Crypto Journey <span className="yellowColor">Now!</span>
                                        </h2>
                                        <div className="description sc-mb-35 white-dark-color">
                                            Phasellus egestas tellus rutrum tellus pellentesque. Neque laoreet the suspendisse
                                            consectetu consequat semper.
                                        </div>
                                    </div>
                                    <div className="crupto-btn-area d-flex align-items-center">
                                        <a href="https://www.apple.com/app-store/" className="sc-yellow-white-btn sc-mr-15" target="_blank" rel="noreferrer" >
                                            <span> <i className="ri-apple-fill"></i> Apps Store</span>
                                        </a>
                                        <a href="https://play.google.com/" className="sc-white-transparent" target="_blank" rel="noreferrer"
                                        ><span> <i className="ri-google-play-fill"></i> Paly Store</span></a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade left>
                                <div className="sc-crupto-image">
                                    <img src={crytoImageTwo} alt="Images" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CryptoApps;