import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Sub from '../components/Sub';

import Card from '../components/Card';



function Main(props) {
    let [cards, setCards]=useState([]);
    
    useEffect(()=>load(), []);
    function load(){
        fetch('https://pets.xn--80ahdri7a.site/public/api/pets')
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                
setCards(result.data.orders.map((card)=><Card data={card}/>));
debugger;
            })
    }
    
    return ( 
        <div>
            <Header/>
            <main style={{ minHeight: "75vh" }}>
            

                <Slider/><h2 className="text-center text-white bg-success  m-2">
            Карточки найденных животных
            </h2>
                <div
                className="d-flex flex-row flex-wrap"
                style={{ paddingLeft: "11%", paddingRight: "11%" }} >
                
                {cards}</div>
                <Sub/>
            </main>

            <Footer/>
        </div>
    
    );
}


export default Main;