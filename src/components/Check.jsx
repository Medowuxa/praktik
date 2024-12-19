import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';  // Импортируем компонент формы
import Prof_info from './Prof_info';  // Импортируем компонент, который отображает данные пользователя

const ParentComponent = () => {
  const [email, setEmail] = useState(""); // Состояние для email

  // Функция для обновления email в состоянии
  const updateEmail = (newEmail) => {
    setEmail(newEmail);  // Обновляем email в родительском компоненте
  };

  useEffect(() => {
    // Получаем email из localStorage или с сервера (если нужно)
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  return (
    <div>
      <h1>Личный кабинет</h1>
      
      {/* Компонент, который изменяет email */}
      <EmailForm onUpdateEmail={updateEmail} />  {/* Передаем функцию обновления email */}

      {/* Компонент для отображения профиля */}
      <Prof_info email={email} />  {/* Передаем email в компонент для отображения */}
    </div>
  );
};

export default ParentComponent;
