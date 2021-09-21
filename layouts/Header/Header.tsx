import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Contents">
          <img
            id="logo"
            src="https://user-images.githubusercontent.com/63544044/132629591-b935ca97-ea07-4dfb-a3ed-722f14a47c28.png"
            alt="USPOT"
            width="120"
            height="90"
          />
          <nav className="Navigation">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                  <img
                    id="home"
                    src="https://user-images.githubusercontent.com/63544044/132648880-8b16475d-ee4d-4adb-9216-f531284213e8.png"
                    alt="home"
                    width="30"
                    height="30"
                  />
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/mypage" style={{ textDecoration: 'none', color: '#000000' }}>
                  <img
                    id="mypage"
                    src="https://user-images.githubusercontent.com/63544044/132648885-bd830b45-aff3-4827-ada9-06531424a269.png"
                    alt="mypage"
                    width="30"
                    height="30"
                  />
                  MYPAGE
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
