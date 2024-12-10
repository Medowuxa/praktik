import React from 'react';

const componentName = () => {
    return (
        <div>
            <>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Вход
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          />
        </div>
        <div className="modal-body">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Логин
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="example@pochta.com"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Запомнить меня
                </label>
              </div>
            </div>
            <div className="justify-content-center ">
              <a href="#" style={{ marginRight: 10 }}>Регистрация</a>
              <a href="#" style={{ marginRight: 10 }}>Забыли логин?</a>
              <a href="#">Забыли пароль?</a>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-success">
            Войти в систему
          </button>
        </div>
      </div>
    </div>
  </div>
  <h2 className="text-center text-white bg-success m-2">Регистрация</h2>
  <div className="p-3">
    <form className="w-50 m-auto border p-3" style={{ minWidth: 300 }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Введите имя:
        </label>
        <input type="text" className="form-control" id="name" />
        <div id="emailHelp1" className="form-text">
          Используйте кириллические буквы
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Введите свой телефон:
        </label>
        <input type="tel" className="form-control" id="phone" />
        <div className="form-text">Используйте цифры, +, -.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Введите адрес электронной почты
        </label>
        <input type="email" className="form-control" id="email" />
        <div className="form-text">
          Мы никогда не делимся Вашими e-mail ни с кем.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Введите пароль:
        </label>
        <input type="password" className="form-control" id="password" />
        <div className="form-text">
          Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 -
          заглавная буква
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password" className="form-label">
          Повторите пароль:
        </label>
        <input type="password" className="form-control" id="confirm_password" />
        <div className="form-text" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check" />
        <label className="form-check-label" htmlFor="check">
          Согласие на обработку персональных данных
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-success"
       
        style={{ marginRight: 10 }}
      >Зарегистрироваться</button>
      <button
        type="button"
        className="btn btn-success "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Вход
      </button>
    </form>
  </div>
</>

        </div>
    );
};

export default componentName;