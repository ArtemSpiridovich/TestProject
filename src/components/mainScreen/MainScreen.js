import React, { ko } from 'react';
import "../../index.css";
import s from "./mainScreen.module.css";

const MainScreen = () => {

  return (
    <div className={s.content}>
      <div className='wrapper'>
        <div className={s.context}>
          <h1>I am Open Sans 120px</h1>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
