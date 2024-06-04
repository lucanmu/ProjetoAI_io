import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { HashLink as Link } from 'react-router-hash-link';
import blogImg1 from '../../assets/images/blog/blog-img1.jpg'
import blogImg2 from '../../assets/images/blog/blog-img2.jpg'
import blogImg3 from '../../assets/images/blog/blog-img3.jpg'

const LatestBlog = () => {
    return (
        <>
            <section className="sc-blog-area sc-pt-125 sc-md-pt-65 sc-sm-mb-30">
                <div className="container">
                    <div className="sc-heading-area sc-mb-55 sc-md-mb-45 text-center">
                        <h2 className="title">Artigos e Novidades</h2>
                    </div>
                    <div className="blog-item-area slider-item-area sc-slick-slide sc-slick-slides">
                        <div className="latest-blog-carousel-wrapper">
                            <Carousel className="latest-blog-carousel"
                                infinite={true}
                                draggable={true}
                                arrows={false}
                                pauseOnHover={true}
                                slidesToSlide={1}
                                swipeable={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 992
                                        },
                                        items: 3,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 991,
                                            min: 577
                                        },
                                        items: 2,
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 576,
                                            min: 1
                                        },
                                        items: 1,
                                    }
                                }}>
                                <div className="blog-item text-center">
                                    <div className="blog-image">
                                        <Link to="/blog-details#"><img src={blogImg1} width="950" height="250" alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-list-menu">
                                            <ul className="blog-list">
                                                <li>
                                                    <Link to="#"><i className="ri-calendar-line"></i> 01 Dec 22</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-user-6-line"></i> Admin </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-title sc-mt-20">
                                            <Link to="/blog-details#">Learn User Experience Design Easy Way.</Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="blog-item text-center">
                                    <div className="blog-image">
                                        <Link to="/blog-details#"><img src={blogImg2} width="950" height="250" alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-list-menu">
                                            <ul className="blog-list">
                                                <li>
                                                    <Link to="#"><i className="ri-calendar-line"></i> 01 Dec 22</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-user-6-line"></i> Admin </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-title sc-mt-20">
                                            <Link to="/blog-details#"> Not Sure How To Get Started With Webflow? </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="blog-item text-center">
                                    <div className="blog-image">
                                        <Link to="/blog-details#"><img src={blogImg3} width="950" height="250" alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-list-menu">
                                            <ul className="blog-list">
                                                <li>
                                                    <Link to="#"><i className="ri-calendar-line"></i> 01 Dec 22</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-user-6-line"></i> Admin </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-title sc-mt-20">
                                            <Link to="/blog-details#">14 No-Code Apps To Help Build A Dashboard.</Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="blog-item text-center">
                                    <div className="blog-image">
                                        <Link to="/blog-details#"><img src={blogImg2} width="950" height="250" alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-list-menu">
                                            <ul className="blog-list">
                                                <li>
                                                    <Link to="#"><i className="ri-calendar-line"></i> 01 Dec 22</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-user-6-line"></i> Admin </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-title sc-mt-20">
                                            <Link to="/blog-details#">In Brutantes Everyday Items Meet Brutalism</Link>
                                        </h3>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestBlog;