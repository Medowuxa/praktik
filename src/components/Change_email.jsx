import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Change_email = () => {
  let history = useNavigate();

  function updateEmail(e)
{
  debugger;

    e.preventDefault();

    const form = document.getElementById('update-email')

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
        body : JSON.stringify({"email": document.getElementById("email").value}),
        // body: new FormData(form);
        //body: JSON.stringify({"email": "newmai1l@user.ru"}),         
        redirect: 'follow'
    };


    fetch("https://pets.сделай.site/api/users/email", requestOptions)
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
    Изменить адрес электронной почты
  </h2>
  <form onSubmit={updateEmail} id="update-email" className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Введите адрес электронной почты
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
      <div className="form-text">
        Мы никогда не делимся Вашими e-mail ни с кем.
      </div>
    </div>
    <button type="submit" className="btn text-white bg-success">
      Отправить
    </button>
  </form>
</>

    );
};

export default Change_email;