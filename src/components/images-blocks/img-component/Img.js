import React from 'react';
import s from "./Img.module.css";

const Img = ({src}) => {
  return (
    <div style={{backgroundImage: `url(${src})`}} className={s.image}/>
  );
}

export default Img;
