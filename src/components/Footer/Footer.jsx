import React from 'react'
import gplay from '../../assets/gplay.png'
import pstore from '../../assets/pstore.png'
import LogoMac from '../../assets/logo.svg';
import * as S from './footer_style';

export default function Footer() {
  return (
    <>
      <S.ContainerFooter>
        <div>
           <S.ImgMac src={LogoMac} alt='logo mec donalds'/>
           <p>© McDonald’s 2024</p>
        </div>

        <div>
           <img src={gplay} alt='Icon google play'/>
           <img src={pstore} alt='Icon play store'/>
        </div>
      </S.ContainerFooter>
    </>
  )
}