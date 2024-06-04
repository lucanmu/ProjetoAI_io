import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import blogImg1 from '../../../assets/images/blog/blog.png'
import blogImg2 from '../../../assets/images/blog/blog_2.png'
import blogImg3 from '../../../assets/images/blog/blog_3.png';

const BlogSidebar = () => {

    const handleSidebarSearch = event => {
        event.preventDefault();
        event.target.reset()
    }

    return (
        <>
            <div className="categories-area">
                <div className="cate_form sc-mb-35">
                    <h3 className="title sc-mb-23">Pesquisar</h3>
                    <form className="catergories-form" onSubmit={handleSidebarSearch}>
                        <input type="text" id="Search" name="search" placeholder="Pesquisar... " />
                        <button type="submit" value="submit"><i className="ri-search-line"></i></button>
                    </form>
                </div>
                <div className="post-item sc-mb-35">
                    <h3 className="title sc-mb-20">Artigos Recentes</h3>
                    {/*<div className="recent-content d-flex align-items-center sc-mb-13">
                        <div className="recent-image">
                            <img src={blogImg1} alt="Recent" />
                        </div>
                        <div className="recent-text sc-pl-20">
                            <h5>
                                <Link to="#">Experience Design Easy Way.</Link>
                            </h5>
                            <div className="calender-item">
                                <i className="ri-calendar-fill"></i>
                                <span>13 Mar, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="recent-content d-flex align-items-center sc-mb-13">
                        <div className="recent-image">
                            <img src={blogImg2} alt="Recent" />
                        </div>
                        <div className="recent-text sc-pl-20">
                            <h5>
                                <Link to="#">How To the Started Webflow. </Link>
                            </h5>
                            <div className="calender-item">
                                <i className="ri-calendar-fill"></i>
                                <span>27 Feb, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="recent-content d-flex align-items-center">
                        <div className="recent-image">
                            <img src={blogImg3} alt="Recent" />
                        </div>
                        <div className="recent-text sc-pl-20">
                            <h5>
                                <Link to="#">Started To the Learned way..</Link>
                            </h5>
                            <div className="calender-item">
                                <i className="ri-calendar-fill"></i>
                                <span>07 Nov, 2022</span>
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div className="categories-item sc-mb-25">
                    <h3 className="title sc-mb-15">Categoria</h3>
                    <ul className="list">
                        <li><Link to="#">UX Design</Link></li>
                        <li><Link to="#">UI Design</Link></li>
                        <li><Link to="#">Graphic Design</Link></li>
                        <li><Link to="#">App Design</Link></li>
                    </ul>
                </div>
                <div className="categories-tag">
                    <h3 className="title sc-mb-15">Tag</h3>
                    <ul className="list">
                        <li><Link to="#">SaaS</Link></li>
                        <li><Link to="#">UI Design</Link></li>
                        <li><Link to="#">Creative</Link></li>
                        <li><Link to="#">Landing</Link></li>
                        <li><Link to="#">Minimal</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;