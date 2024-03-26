import React, { useState } from 'react'
import hamb from '../../assets/hamb.png';
import batt from '../../assets/batt.png';
import sorv from '../../assets/sorv.png';
import lanc from '../../assets/lanc.png';
import rest from '../../assets/rest.png';
import junt from '../../assets/junt.png';
import Card from './Card';
import * as S from '../../components/Main/main_style';

export default function Main() {

  return (

    <main>
        <S.ContainerMequi>
            <S.ContainerPrincipal>
                <img src={hamb}/>
                <h1>Bateu aquela <span>#fome</span> de <span>méqui</span>?</h1>
            </S.ContainerPrincipal>

            <S.ContainerImagens>
                <img src={hamb} alt=''/>
                <img src={batt} alt=''/>
                <img src={sorv} alt=''/>
            </S.ContainerImagens>
        </S.ContainerMequi>

        <S.Section02>
          <h3>Promoção</h3>

          <S.ContainerCards>
             <Card imagem={lanc} texto={"Que tal um #MéquiNoSofá?"}/>
             <Card imagem={rest} texto={"venha conhecer nossa nova loja"}/>
             <Card imagem={junt} texto={"Confira as medidas que o Méqui adotou!"}/>
          </S.ContainerCards>
        </S.Section02>
        

    </main>
  )
}