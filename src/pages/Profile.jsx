import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prof_info from '../components/Prof_info';
import Prof_red_kart from '../components/Prof_red_kart';

const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh", paddingLeft: 70, paddingRight: 70 }}>
            <Prof_info/>
            <Prof_red_kart/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;