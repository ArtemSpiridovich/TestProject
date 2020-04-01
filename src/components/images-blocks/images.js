import React from 'react';
import "../../index.css";
import s from "./images-blocks.module.css";

import img1 from '../../assets/image1-min.jpeg'
import img2 from '../../assets/image2-min.jpg'
import img3 from '../../assets/image3-min.jpeg'

const Images = () => {
  return (
    <div className={s.content}>
      <div className='wrapper'>
        <div className={s.context}>
          <h2>I am open sans extra bold 48px</h2>
          <p>Please follow all directions, make fonts the same size, respect</p>
          <div className={s.images}>
            <img className={s.image} src={img1}/>
            <img className={s.image} src={img2}/>
            <img className={s.image} src={img3}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
