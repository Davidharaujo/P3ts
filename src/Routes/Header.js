import React from "react";
import { Link } from "react-router-dom";
import * as S from '../Components/Style/HeaderStyle'

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <S.Bloco>
        <h1>p3ts</h1>
      <S.Navigation>
        <S.Lista>
          <li>
            <S.SLink to="/">{rota}</S.SLink>
          </li>
          <li>
            <S.SLink to="/dog">{rota2}</S.SLink>
          </li>
          <li>
            <S.SLink to="/cat">{rota3}</S.SLink>
          </li>
        </S.Lista>
      </S.Navigation>
    </S.Bloco>
  );
};

export default Header;
