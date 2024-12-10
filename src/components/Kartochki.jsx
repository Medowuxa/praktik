import React from 'react';
import Pic4 from '../image/pets/kot.jpg';
import Pic5 from '../image/pets/pes.jpg';
import Pic6 from '../image/pets/kotan.jpg';
import Pic7 from '../image/pets/pesik.jfif';
import Pic8 from '../image/pets/kota.jpg';
import Pic9 from '../image/pets/kotik.jpg';

const componentName = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-success  m-2">
    Карточки найденных животных
  </h2>
  <div
    className="d-flex flex-row flex-wrap"
    style={{ paddingLeft: "11%", paddingRight: "11%" }}
  >
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic4}
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
        Кошка
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
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic5}
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
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic6}
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
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic7}
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
        32
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        Щенок
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялся маленький щенок. Игривый и задорный.
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        do-081-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Выборгский
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        14-03-2020
      </p>
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic8}
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
        01
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        Кошка
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялась кошка Бусинка. Рыжая с голубыми глазами.
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        ca-011-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Красносельский
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        14-12-2022
      </p>
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={Pic9}
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
        23
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
        Кошка
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        Потерялась кошка, 4 месяца. Последний раз видели около ТРЦ "Космос"
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        ca-015-spb
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        Приморcкий
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        03-03-2020
      </p>
    </div>
  </div>
        </div>
    );
};

export default componentName;