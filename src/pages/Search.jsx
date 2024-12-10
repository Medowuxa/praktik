import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search_form from '../components/Search_form';

const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "75vh" }}>
            <Search_form/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;