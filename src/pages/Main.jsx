import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Sub from '../components/Sub';
import Kartochki from '../components/Kartochki';
import Slider_prop from '../components/Slider_prop';

const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "75vh" }}>
            {/* <Slider_prop/> */}
                <Slider/>
                <Kartochki/>
                <Sub/>
            </main>

            <Footer/>
        </div>
    );
};

export default componentName;