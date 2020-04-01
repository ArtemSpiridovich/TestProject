import React from 'react';
import s from "./Img.module.css";

const Img = ({src}) => {
  return (
    <div className={s.image}>
      <img src={src}/>
    </div>
  );
}

export default Img;
