import React from 'react';
import Reg_Form from '../components/Reg_Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Vhod from '../components/Vhod';

const componentName = () => {
    return (
        <div>
            <Header/>
             <main style={{ minHeight: "70vh" }}>
               <Vhod/> 
               
             </main>
             <Footer/>
        </div>
    );
};

export default componentName;