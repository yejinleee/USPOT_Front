import React from 'react';
import './Style.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Contents">
        <div>로고 자리</div>

        <nav className="Navigation">
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
