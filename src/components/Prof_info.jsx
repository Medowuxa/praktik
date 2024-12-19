import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Prof_info({ email }) {
  const [user, setUser] = useState(null);
  const history = useNavigate();

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
      const response = await fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions);
      const result = await response.json();
      
      if (result) {
        setUser(result);
      } else {
        history("/vhod");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      history("/vhod");
    }
  }

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-center text-white bg-success m-2">Личный кабинет</h2>
      <div className="p-3">
        <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{ minWidth: 300 }}>
          <p className="w-50 text-success" style={{ minWidth: 250 }}>Телефон:</p>
          <p className="w-50" style={{ minWidth: 250 }}>{user.phone}</p>
          
          <p className="w-50 text-success" style={{ minWidth: 300 }}>email:</p>
          <p className="w-50" style={{ minWidth: 300 }}>{email || user.email}</p> {/* Отображаем email из props или из user */}
          
          <p className="w-50 text-success" style={{ minWidth: 300 }}>Имя:</p>
          <p className="w-50" style={{ minWidth: 300 }}>{user.name}</p>

          <p className="w-50 text-success" style={{ minWidth: 300 }}>Дата регистрации:</p>
          <p className="w-50" style={{ minWidth: 300 }}>{user.registrationDate}</p>

          <p className="w-50 text-success" style={{ minWidth: 300 }}>Количество найденных животных:</p>
          <p className="w-50" style={{ minWidth: 300 }}>{user.countOrder}</p>

          <p className="w-50 text-success" style={{ minWidth: 300 }}>Количество объявлений:</p>
          <p className="w-50" style={{ minWidth: 300 }}>{user.countPets}</p>
        </div>
      </div>
    </div>
  );
}

export default Prof_info;