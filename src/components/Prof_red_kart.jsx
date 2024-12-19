import React, { useEffect, useState } from 'react';


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
        src={'https://pets.сделай.site'+props.data.photos}
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
      {props.data.id}
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
      {props.data.description}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
      {props.data.mark}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
      {props.data.district}
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
  {/* <nav aria-label="Page navigation example" className="m-3">
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
  </nav> */}
</>
 
        </div>
    );
};
export default Prof_red_kart;