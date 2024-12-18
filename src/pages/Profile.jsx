import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prof_info from '../components/Prof_info';
import Prof_red_kart from '../components/Prof_red_kart';

function Profile(props) {
    let [cards_lk, setCards_lk]=useState([]);
      
     
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
  
    useEffect(() => {
      req_user();
    }, []);  // useEffect без зависимостей, вызывается один раз после монтирования компонента
  
    async function req_user() {
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
  
      try {
        const response = await fetch("https://pets.xn--80ahdri7a.site/api/users/orders", requestOptions);
        const result = await response.json();
        
        if (result) {
       setCards_lk(result.data.orders.map((card_lk)=><Prof_red_kart data={card_lk}/>));

        } 
      } catch (error) {
        console.error("Error fetching user data:", error);
          // Если произошла ошибка при запросе, также перенаправляем
      }
    }
      return (
          <div>
              <Header/>
              <main style={{ minHeight: "70vh", paddingLeft: 70, paddingRight: 70 }}>
              <Prof_info/>
              <h2 className="text-center text-white bg-success m-2">
                 Добавленные объявления
                </h2>
              <div
                className="d-flex flex-row flex-wrap"
                style={{ paddingLeft: "11%", paddingRight: "11%" }} >
                
                {cards_lk}</div>
              {/* <Prof_red_kart/> */}
              </main>
              <Footer/>
          </div>
      );
  };

export default Profile;