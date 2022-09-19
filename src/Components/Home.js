import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Style/Styles'

export default function Home() {
  return (
    <S.Caixa>
        <h2>Encontre fotos fofas e engraçadas de Doguinhos e Catinhos!</h2>
        <S.Botao><S.SLink to="/dog">Quero Doguinhos!</S.SLink></S.Botao>
        <S.Botao><S.SLink>Quero Catinhos!</S.SLink></S.Botao>
    </S.Caixa>
  )
}
