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
          <a>HOME</a>
          <a>ABOUT</a>
            <LogoSvg w='300px' f={`var(--white)`}/>
          <a>SERVICE</a>
          <a>CONTACT</a>
        </div>
        <div className={s.context2}>
            <LogoSvg w={`calc(100vw/2.6)`} f={`var(--white)`}/>
          <button onClick={() => setTimeout(() => changeViewMode(!viewMode), 0)} className={`${s.but} ${viewMode ? `${s.buttonClose}` : `${s.button}`}`}>
              <div></div><div></div><div></div>
          </button>
          <div className={`${s.lin} ${classForLinks}`}>
            <a>HOME</a>
            <a>ABOUT</a>
            <a>SERVICE</a>
            <a>CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
