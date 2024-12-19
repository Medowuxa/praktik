import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Change_phone = () => {
    let history = useNavigate();


    function updatePhone(e)
  {
    debugger;
  
      e.preventDefault();
  
      const form = document.getElementById('update-phone')
  
      if (!form.checkValidity()) {
          e.stopPropagation()
          form.classList.add('was-validated')
          return
      }
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  
  
      let requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body : JSON.stringify({"phone": document.getElementById("phone").value}),        
          redirect: 'follow'
      };
  
  
      fetch("https://pets.сделай.site/api/users/phone", requestOptions)
          .then(response => response.status)
          .then(result => {
            debugger;
              console.log(result)
              if (result === 200) {
                  let message = 'Вы успешно зарегистрировались!';
                  window.location.reload(); 
              }
              else
              {
              }})
          .catch(error => function(){debugger;console.log('error', error)});
  }
    return (
        <>
        <h2 className="text-center text-white bg-success m-2">
    Изменить номер телефона
  </h2>
  <form onSubmit={updatePhone} id="update-phone" className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
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
    <button type="submit" className="btn text-white bg-success">
      Отправить
    </button>
  </form>
  </>
    );
};

export default Change_phone;
