import React, {useState} from 'react';
import s from './header.module.css';
import LogoSvg from "../svg/svg";
import '../../index.css'


const Header = () => {

  const[viewMode, changeViewMode] = useState(false)

  const classForLinks = viewMode ? s.links : s.noLinks;

  return (
    <div className={s.content}>
      <div className='wrapper'>
        <div className={s.context1}>
          <a href="/">HOME</a>
          <a href="/">ABOUT</a>
          <div className={s.img}>
            <LogoSvg/>
          </div>
          <a href="/">SERVICE</a>
          <a href="/">CONTACT</a>
        </div>
        <div className={s.context2}>
          <div className={s.img}>
            <LogoSvg/>
          </div>
          <button onClick={() => setTimeout(() => changeViewMode(!viewMode), 0)} className={`${s.but} ${viewMode ? `${s.buttonClose}` : `${s.button}`}`}>
              <div></div><div></div><div></div>
          </button>
          <div className={`${s.lin} ${classForLinks}`}>
            <a href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">SERVICE</a>
            <a href="/">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
