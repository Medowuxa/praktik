import React from 'react';
import Pic1 from '../image/pets/ezh.jpg';
import Pic2 from '../image/pets/krol.jpeg';
import Pic3 from '../image/pets/porosya.jpg';



function Slider(props) {
  return (
        <div>
            <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
  <div
    id="carouselExampleIndicators"
    className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
    data-bs-ride="carousel"
    style={{ minHeight: 400 }}
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={Pic1}
          className="d-block m-auto"
          alt="Ежик"
          style={{ height: 200 }}
        />
        <h2 className="text-center">Найден ежик</h2>
        <p className="text-center">
          Маленький ежик, был утерян в приморcком районе
        </p>
      </div>
      <div className="carousel-item">
        <img
          src={Pic2}
          className="d-block m-auto"
          alt="Кролик"
          style={{ height: 200 }}
        />
        <h2 className="text-center">Найден кролик</h2>
        <p className="text-center">
          Пушистый кролик, был утерян в адмиралтейском районе
        </p>
      </div>
      <div className="carousel-item">
        <img
          src={Pic3}
          className="d-block m-auto"
          alt="Поросенок"
          style={{ height: 200 }}
        />
        <h2 className="text-center">Найден поросенок</h2>
        <p className="text-center">
          Розовый мини пиг, был утерян в пушкинском районе
        </p>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
        </div>
    );
};  

export default Slider;