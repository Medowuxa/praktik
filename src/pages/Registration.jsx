import React from 'react';
import Reg_Form from '../components/Reg_Form';
import Header from '../components/Header';
import Footer from '../components/Footer';

const componentName = () => {
    return (
        <div>
            <Header/>
             <main style={{ minHeight: "70vh" }}>
                <Reg_Form/>
             </main>
             <Footer/>
        </div>
    );
};

export default componentName;