import '../../../index.css';
import './NavTab.css';
import React from "react";
import { Link} from 'react-router-dom';






function NavTab(props) {
  return (
    <div className="navtab">
      <div className="navtab__link-container">
        <a className="navtab__link" href="#why-us-better">УК лучше ТСЖ?</a>
        <a className="navtab__link" href="#why-us">Почему именно мы?</a>
        <Link to="/contacts" className="navtab__link" >Контакты</Link>
      </div>
    </div>
  );
}

export default NavTab;
