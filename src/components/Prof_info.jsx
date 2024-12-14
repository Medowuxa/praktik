import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";




function Prof_info(props) {
  let [user, setUser]=useState();  
  let history=useNavigate();  

  let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //myHeaders.append("Authorization","Bearer zxW5WdPk7Fkds2nxGpykoedR3iHb3zsgkDdBCGR8F8XziG0LJxTeuGk0o9v2BNjBG0TzGdueHlZ3qG2D");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
  
    let raw = JSON.stringify(user);
    
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
        };

        fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions)

        .then(response=> response.json())  
        .then(result=>{
        
        
        if (result){

          setUser(result);
            // localStorage.token=result.data.token
              // setToken(result.data.token)
           //history('/profile')
              // document.getElementById('success').style.display='block'
              // document.getElementById('error').style.display='none'
        } else {
        // document.getElementById('error').style.display='block'
        // document.getElementById('success').style.display='none'
        // document.getElementById('validationCustom02').value=''
            history("/vhod");
        }
        // debugger;
        // console.log({user})
      });

  return (
    <div>
       <>
  <h2 className="text-center text-white bg-success m-2">Личный кабинет</h2>
  <div className="p-3">
    <div
      className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
      style={{ minWidth: 300 }}
    >
      
      {/* {debugger;} */}
      {/* <p className="w-50 text-success" style={{ minWidth: 250 }}>
        id:
      </p>
      <p className="w-50" style={{ minWidth: 250 }}>
        {user.id}
      </p> */}
      <p className="w-50 text-success" style={{ minWidth: 250 }}>
        Телефон:
      </p>
      <p className="w-50" style={{ minWidth: 250 }}>
        {/* {user.phone} */}
      </p>
      <p className="w-50 text-success" style={{ minWidth: 300 }}>
        email:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        {/* {user.email} */}
      </p>
      <p className="w-50 text-success" style={{ minWidth: 300 }}>
        Имя:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        {/* {user.name} */}
      </p>
      <p className="w-50 text-success" style={{ minWidth: 300 }}>
        Дата регистрации:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        {/* {user.registrationDate} */}
      </p>
      <p className="w-50 text-success" style={{ minWidth: 300 }}>
        Количество найденных животных:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        {/* {user.countOrder} */}
      </p>
      <p className="w-50 text-success" style={{ minWidth: 300 }}>
        Количество объявлений:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        {console.log(user)}
        
        {/* {user.countPets} */}
      </p>
    </div>
  </div>
  <h2 className="text-center text-white bg-success m-2">
    Изменить адрес электронной почты
  </h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Введите адрес электронной почты
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div className="form-text">
        Мы никогда не делимся Вашими e-mail ни с кем.
      </div>
    </div>
    <button type="submit" className="btn btn-success">
      Отправить
    </button>
  </form>
  <h2 className="text-center text-white bg-success m-2">
    Изменить номер телефона
  </h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Введите номер телефона
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        aria-describedby="emailHelp"
      />
      <div className="form-text">Используйте цифры, +, -.</div>
    </div>
    <button type="submit" className="btn btn-success">
      Отправить
    </button>
  </form>
</>

    </div>
  );
}

export default Prof_info;

// const componentName = () => {
//   let [user, setUser]=useState();  

//   let myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization","Bearer zxW5WdPk7Fkds2nxGpykoedR3iHb3zsgkDdBCGR8F8XziG0LJxTeuGk0o9v2BNjBG0TzGdueHlZ3qG2D");
  
//     let raw = JSON.stringify(user);
    
//     let requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//         };

//         fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions)

//         .then(response=> response.json())  
//         .then(result=>{
//         debugger;
//           console.log(result)
//             if ('data' in result){
//             localStorage.token=result.data.token
//               setToken(result.data.token)
//            //history('/profile')
//               document.getElementById('success').style.display='block'
//               document.getElementById('error').style.display='none'
//         } else {
//         document.getElementById('error').style.display='block'
//         document.getElementById('success').style.display='none'
//         document.getElementById('validationCustom02').value=''
//         }
//       });


//     return (
//         <div>
//             <>
//   <h2 className="text-center text-white bg-success m-2">Личный кабинет</h2>
//   <div className="p-3">
//     <div
//       className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
//       style={{ minWidth: 300 }}
//     >
//       <p className="w-50 text-success" style={{ minWidth: 250 }}>
//         id:
//       </p>
//       <p className="w-50" style={{ minWidth: 250 }}>
//         15
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 250 }}>
//         Телефон:
//       </p>
//       <p className="w-50" style={{ minWidth: 250 }}>
//         +7-952-434-34-34
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 300 }}>
//         email:
//       </p>
//       <p className="w-50" style={{ minWidth: 300 }}>
//         pochta@pochta.ru
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 300 }}>
//         Имя:
//       </p>
//       <p className="w-50" style={{ minWidth: 300 }}>
//         Иван
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 300 }}>
//         Дата регистрации:
//       </p>
//       <p className="w-50" style={{ minWidth: 300 }}>
//         26-06-2024
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 300 }}>
//         Количество найденных животных:
//       </p>
//       <p className="w-50" style={{ minWidth: 300 }}>
//         2
//       </p>
//       <p className="w-50 text-success" style={{ minWidth: 300 }}>
//         Количество объявлений:
//       </p>
//       <p className="w-50" style={{ minWidth: 300 }}>
//         4
//       </p>
//     </div>
//   </div>
//   <h2 className="text-center text-white bg-success m-2">
//     Изменить адрес электронной почты
//   </h2>
//   <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
//     <div className="mb-3">
//       <label htmlFor="exampleInputEmail1" className="form-label">
//         Введите адрес электронной почты
//       </label>
//       <input
//         type="email"
//         className="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//       />
//       <div className="form-text">
//         Мы никогда не делимся Вашими e-mail ни с кем.
//       </div>
//     </div>
//     <button type="submit" className="btn btn-success">
//       Отправить
//     </button>
//   </form>
//   <h2 className="text-center text-white bg-success m-2">
//     Изменить номер телефона
//   </h2>
//   <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
//     <div className="mb-3">
//       <label htmlFor="phone" className="form-label">
//         Введите номер телефона
//       </label>
//       <input
//         type="tel"
//         className="form-control"
//         id="phone"
//         aria-describedby="emailHelp"
//       />
//       <div className="form-text">Используйте цифры, +, -.</div>
//     </div>
//     <button type="submit" className="btn btn-success">
//       Отправить
//     </button>
//   </form>
// </>

//         </div>
//     );
// };

// export default componentName;