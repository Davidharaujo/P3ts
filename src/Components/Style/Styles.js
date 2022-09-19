import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration: none;
    }

    body{
      background-image: url('https://img.freepik.com/vetores-premium/fundo-do-teste-padrao-do-animal-de-estimacao_76433-12.jpg?w=2000');
      font-family: 'Poppins', sans-serif;
    }

`;
/* Style das páginas Cats e Dogs */

export const Caixa = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const Foto = styled.img`
  width: 300px;
  height: 250px;
  border: 2px solid;
  border-radius: 10px;
`;

export const Botao = styled.button `
  width: 150px;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: #e71d36;
  cursor: pointer;
  transition: 1000ms;

  &:hover {
    transform: scale(1.1);
  }
`
export const SLink = styled(Link)`
    color: white;
`
