import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";

  const DogsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };

  return (
    <S.Caixa>
      <h2>Woof! :3</h2>
      <S.Foto src={data} alt="nome" />
      <S.Botao onClick={() => {DogsApi();}}>
        +1 Doguinho!
      </S.Botao>
    </S.Caixa>
  );
};

export default Dogs;
