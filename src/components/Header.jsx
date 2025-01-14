import React from 'react';
import Logo from "../image/logo.png"
import { Link } from 'react-router-dom';
import Fast_Search from './Fast_search'

const componentName = () => {
    return (
        <div>
            <header>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="index.html"> */}
        <Link to={'/'} className="navbar-brand">
        <img
          src={Logo}
          className="rounded-3"
          alt="logo"
          style={{ width: 60 }}
        />
        </Link>
      {/* </a> */}
      <Link to={'/'} className="navbar-brand">
        Главная</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
            <Link to={'/vhod'} className="nav-link">
              Личный кабинет
              </Link>
            
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="html/registration.html"> */}
              <Link to={'/registration'} className="nav-link">
              Регистрация
            {/* </a> */}
            </Link>
          </li>
          <li className="nav-item">
            
              <Link to={'/add_pet'} className='nav-link'>
              Добавить объявление
              </Link>
            
          </li>
          <li className="nav-item">
      
              <Link to={'/search'} className='nav-link'>
              Поиск по объявлениям
              </Link>
         
          </li>
        </ul>
        <form className="d-flex">
          <Fast_Search/>
          {/* <input
            className="form-control me-2"
            type="search"
            list="pets"
            placeholder="Поиск"
            aria-label="Search"
          />
          <button className="btn btn-success" onclick="">
            Поиск
          </button>
          <datalist id="pets">
            <option value="Кошка"></option>
            <option value="Собака"></option>
            <option value="Корова"></option>
            <option value="Крокодил"></option>
            <option value="Сова"></option>
          </datalist> */}
        </form>
      </div>
    </div>
  </nav>
</header>

        </div>
    );
};

export default componentName;