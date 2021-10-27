import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Style.css';

const LogInHeader = () => {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', JSON.stringify('KO'));
  } // 혹시모를 기본값 설정

  const onClickKo = () => {
    localStorage.removeItem('language');
    localStorage.setItem('language', JSON.stringify('KO'));
    console.log(localStorage.getItem('language'));
    location.reload();
  };
  const onClickEn = () => {
    localStorage.removeItem('language');
    localStorage.setItem('language', JSON.stringify('EN'));
    console.log(localStorage.getItem('language'));
    location.reload();
  };
  var local = localStorage.getItem('language');
  var language = local.split('"');

  return (
    <header className="Header">
      <div className="Contents">
        <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <img className="logo" src="/src/icon/USPOT로고.png" alt="USPOT" width="120" height="90" />
        </Link>
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                <img className="header_category" src="/src/icon/home.png" alt="home" width="30" height="30"/>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: '#000000' }}
                onClick={() => {
                  alert('로그인이 필요한 서비스입니다. 로그인을 해주세요');
                  <Redirect to="/login" />;
                }}
              >
                <img className="header_category" src="/src/icon/mypage.png" alt="mypage" width="30" height="30" />
                MYPAGE
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ textDecoration: 'none', color: '#000000' }}>
                <img className="header_category" src="/src/icon/mypage.png" alt="login" width="30" height="30" />
                LOGIN
              </Link>
            </li>
            <div id="btn">
              <li>
                <button className="language" onClick={onClickKo} id={language[1]==='KO'? "selectedlanguage" : "notselectedlanguage"}>
                  KOR
                </button>
              </li>
              <li>
                <button className="language" onClick={onClickEn} id={language[1]==='EN'? "selectedlanguage" : "notselectedlanguage"}>
                  ENG
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LogInHeader;
