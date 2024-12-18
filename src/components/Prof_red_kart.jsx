import React, { useEffect, useState } from 'react';
import Pic10 from '../image/pets/kot.jpg';
import Pic11 from '../image/pets/pes.jpg';
import Pic12 from '../image/pets/kotan.jpg';


function Prof_red_kart(props) {

    return (
        <div>
           <>
  <div className="d-flex flex-row flex-wrap">
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
      style={{ minWidth: 300, width: "30%", marginLeft: 100 }}
    >
      <img
        src={Pic10}
        className="w-75"
        alt="рисунок животного"
        style={{
          maxHeight: "100vh",
          marginBottom: 10,
          maxWidth: 400,
          objectFit: "cover"
        }}
      />
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        id:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
      14
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 30, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        {props.data.kind}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялась кошка, пушистая,полосатая, серая. Любит играть, ласковая.
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        ca-001-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Калининский
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        24-03-2020
      </p>
      <div
        className="position-absolute text-danger"
        style={{ top: 15, right: 15, cursor: "pointer" }}
      >
        ❌
      </div>
      <button type="submit" className="btn btn-success">
        Редактировать объявление
      </button>
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic11}
        className="w-75"
        alt="рисунок животного"
        style={{
          maxHeight: "100vh",
          marginBottom: 10,
          maxWidth: 400,
          objectFit: "cover"
        }}
      />
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        id:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        15
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        Собака
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялась собака. Спокойная, домашняя. Последний раз замечена в районе
        Московского вокзала.
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        do-011-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Московский
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        14-03-2022
      </p>
      <div
        className="position-absolute text-danger"
        style={{ top: 15, right: 15, cursor: "pointer" }}
      >
        ❌
      </div>
      <button type="submit" className="btn btn-success">
        Редактировать объявление
      </button>
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic12}
        className="w-75"
        alt="рисунок животного"
        style={{
          maxHeight: "100vh",
          marginBottom: 10,
          maxWidth: 400,
          objectFit: "cover"
        }}
      />
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        id:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        25
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        Кот
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялся кот, откликается на Барсика. Убежал из дома.
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        ca-031-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Калининский
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        24-04-2020
      </p>
      <div
        className="position-absolute text-danger"
        style={{ top: 15, right: 15, cursor: "pointer" }}
      >
        ❌
      </div>
      <button type="submit" className="btn btn-success">
        Редактировать объявление
      </button>
    </div>
  </div>
  <nav aria-label="Page navigation example" className="m-3">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
</>
 
        </div>
    );
};
export default Prof_red_kart;