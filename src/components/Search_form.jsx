import React from 'react';

const componentName = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-success m-2">
    Поиск по объявлениям
  </h2>
  <div className="p-3">
    <form className="w-50 m-auto border p-3" style={{ minWidth: 300 }}>
      <div className="mb-3">
        <label htmlFor="district" className="form-label">
          Выберите район:
        </label>
        <select id="district" className="form-select">
          <option>Приморский</option>
          <option>Петроградский</option>
          <option>Василиостровский</option>
          <option>Центральный</option>
          <option>Красногвардейский</option>
          <option>Выборгский</option>
          <option>Калининский</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Введите вид животного:
        </label>
        <input type="text" className="form-control" id="password" />
      </div>
      <input type="submit" className="btn btn-success" defaultValue="Войти" />
    </form>
  </div>
        </div>
    );
};

export default componentName;