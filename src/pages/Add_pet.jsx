import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Add_pet_Form from '../components/Add_pet_Form'

const componentName = () => {
    return (
        <div>
            <Header/>  
            <main style={{ minHeight: "70vh" }}>
            <Add_pet_Form/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;