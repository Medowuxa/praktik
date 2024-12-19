import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prof_info from '../components/Prof_info';
import Prof_red_kart from '../components/Prof_red_kart';
import Change_email from '../components/Change_email';
import Change_phone from '../components/Change_phone'

function Profile(props) {
      const [orders, setOrders] = useState([]);  
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

    useEffect(() => {
        req_user();
    }, []);  

    async function req_user() {
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        try {
            const response = await fetch("https://pets.xn--80ahdri7a.site/api/users/orders", requestOptions);
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            const result = await response.json();
          
            if (result && result.data && Array.isArray(result.data.orders)) {
                setOrders(result.data.orders); 
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
         
        }
  
    }

    return (
        <div>
            <Header />
            <main style={{ minHeight: "70vh", paddingLeft: 70, paddingRight: 70 }}>
                <Prof_info /> 
                <Change_email />
                <Change_phone/>
                <h2 className="text-center text-white bg-success m-2">
                    Добавленные объявления
                </h2>
                <div
                    className="d-flex flex-row"
                    style={{ paddingLeft: "11%", paddingRight: "11%" }}
                >
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <Prof_red_kart key={order.id || index} data={order} />
                        ))
                    ) : (
                        <p className='text-center'>Нет добавленных объявлений.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Profile;


// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Prof_info from '../components/Prof_info';
// import Prof_red_kart from '../components/Prof_red_kart';

// function Profile(props) {
//     let [cards_lk, setCards_lk]=useState([]);
      
     
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
  
//     useEffect(() => {
//       req_user();
//     }, []);  // useEffect без зависимостей, вызывается один раз после монтирования компонента
  
//     async function req_user() {
//       const requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//       };
  
//       try {
//         const response = await fetch("https://pets.xn--80ahdri7a.site/api/users/orders", requestOptions);
//         const result = await response.json();
        
//         if (result) {
//        setCards_lk(result.data.orders.map((card_lk)=><Prof_red_kart data={card_lk}/>));

//         } 
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//           // Если произошла ошибка при запросе, также перенаправляем
//       }
//     }
//       return (
//           <div>
//               <Header/>
//               <main style={{ minHeight: "70vh", paddingLeft: 70, paddingRight: 70 }}>
//               <Prof_info/>
//               <h2 className="text-center text-white bg-success m-2">
//                  Добавленные объявления
//                 </h2>
//               <div
//                 className="d-flex flex-row flex-wrap"
//                 style={{ paddingLeft: "11%", paddingRight: "11%" }} >
                
//                 {cards_lk}</div>
//               {/* <Prof_red_kart/> */}
//               </main>
//               <Footer/>
//           </div>
//       );
//   };

// export default Profile;