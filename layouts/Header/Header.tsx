import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Contents">
          <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
            <img id="logo" src="/src/icon/USPOT로고.png" alt="USPOT" width="120" height="90" />
          </Link>
          <nav className="Navigation">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                  <img id="home" src="/src/icon/home.png" alt="home" width="30" height="30" />
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/mypage" style={{ textDecoration: 'none', color: '#000000' }}>
                  <img id="mypage" src="/src/icon/mypage.png" alt="mypage" width="30" height="30" />
                  MYPAGE
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none', color: '#000000' }}>
                  <img id="mypage" src="/src/icon/mypage.png" alt="mypage" width="30" height="30" />
                  회원가입
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
