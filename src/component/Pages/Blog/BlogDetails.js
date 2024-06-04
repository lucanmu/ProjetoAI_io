import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import BlogDetailsData from './BlogDetailsData';
import Apps from '../../Shared/Apps';

const BlogDetails = () => {
    return (
        <>
            <Header
                parentMenu='blog'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Blog Details' />
            <BlogDetailsData />
            <Apps />
        </>
    );
};

export default BlogDetails;