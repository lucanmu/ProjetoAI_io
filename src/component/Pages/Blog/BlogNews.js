import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BlogSidebar from './BlogSidebar';
import pagesBlogImg1 from '../../../assets/images/blog/pages_blog_img.jpg'
import pagesBlogImg2 from '../../../assets/images/blog/blog-img2.jpg'
import pagesBlogImg3 from '../../../assets/images/blog/pages_blog_img3.jpg'

const BlogNews = () => {
    return (
        <>
            <div className="sc-blog-pages-area sc-pt-140 sc-md-pt-80 sc-pb-20 sc-md-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-item sc-mb-30">
                                <div className="blog-image">
                                    <Link to="#"><img src={pagesBlogImg1} alt="Blog" /></Link>
                                </div>
                                <div className="blog-content text-center">
                                    <div className="blog_date">
                                        <ul>
                                            <li>17</li>
                                            <li>Abr</li>
                                        </ul>
                                    </div>
                                    <div className="blog-list-menu list_menu">
                                        <ul className="blog-list">
                                            <li><i className="ri-edit-fill"></i><Link to="#"> Admin</Link></li>
                                            <li><i className="ri-chat-3-fill"></i><Link to="/blog-details#"> 03 Comentários</Link></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title sc-pt-15 sc-mb-15 fw-bold">
                                        <Link to="/blog-details#">Aumentando a Produtividade com Inteligência Artificial na Criação de Documentos</Link>
                                    </h3>
                                    <div className="description sc-mb-20">
                                    A busca pela eficiência e produtividade é uma constante em todas as esferas da vida contemporânea, e o ambiente corporativo não é exceção.
                                    </div>
                                    <Link to="/blog-details#" className="readmore">Leia Mais</Link>
                                </div>
                           {/* </div>
                            <div className="blog-item sc-mb-30">
                                <div className="blog-image">
                                    <Link to="#"><img src={pagesBlogImg2} alt="Blog" /></Link>
                                </div>
                                <div className="blog-content text-center">
                                    <div className="blog_date">
                                        <ul>
                                            <li>15</li>
                                            <li>Apr</li>
                                        </ul>
                                    </div>
                                    <div className="blog-list-menu list_menu">
                                        <ul className="blog-list">
                                            <li><i className="ri-edit-fill"></i><Link to="#"> Admin</Link></li>
                                            <li><i className="ri-chat-3-fill"></i> <Link to="#"> 05 Comment</Link></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title sc-pt-15 sc-mb-15 fw-bold">
                                        <Link to="/blog-details#">In BRUTANTES Everyday Items Meet Brutalism</Link>
                                    </h3>
                                    <div className="description sc-mb-20">
                                        Volutpat odio facilisis mauris sit amet massa vitae. Nunc scelerisque viverra mauris in aliquam ut. Cursus sit amet dictum sit amet enim diam
                                        amet luctus venenatis lectus feugiat
                                    </div>
                                    <Link to="#" className="readmore">Read More </Link>
                                </div>
                            </div>
                            <div className="blog-item sc-mb-30">
                                <div className="blog-image">
                                    <Link to="#"><img src={pagesBlogImg3} alt="Blog" /></Link>
                                </div>
                                <div className="blog-content text-center">
                                    <div className="blog_date">
                                        <ul>
                                            <li>22</li>
                                            <li>Dec</li>
                                        </ul>
                                    </div>
                                    <div className="blog-list-menu list_menu">
                                        <ul className="blog-list">
                                            <li><i className="ri-edit-fill"></i><Link to="#"> Admin</Link></li>
                                            <li><i className="ri-chat-3-fill"></i><Link to="#"> 05 Comment</Link></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title sc-pt-15 sc-mb-15 fw-bold">
                                        <Link to="/blog-details#">Nautical-Inspired Booi Warmly Light Any Space, Shore, or Floor</Link>
                                    </h3>
                                    <div className="description sc-mb-20">
                                        Volutpat odio facilisis mauris sit amet massa vitae. Nunc scelerisque viverra mauris in aliquam ut. Cursus sit amet dictum sit amet enim diam
                                        amet luctus venenatis lectus feugiat
                                    </div>
                                    <Link to="#" className="readmore">Read More </Link>
                                </div>*/}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar></BlogSidebar>
                        </div>
                    </div>
                    <div className="spria-navigation text-center sc-md-pt-70">
                        <ul>
                            <li><Link to="#" className="active">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#">5</Link></li>
                            <li><Link to="#" className="arrow arrow-line"><i className="ri-arrow-right-line"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogNews;