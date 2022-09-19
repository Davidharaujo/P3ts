import React, {useState} from 'react'
import axios from 'axios'
import * as S from './Style/Styles'

export default function Cats() {
    const [data,setData] = useState(null)

    const API = 'https://api.thecatapi.com/v1/images/search'

    const CatsApi = () => {
        axios.get(API).then((resposta)=>{
                setData(resposta.data[0].url);
                console.log(data)
            })
            .catch((error)=>{
                console.log("Desculpe, aconteceu um erro na requisição", error)
    })       
};
  return (
    <S.Caixa>
        <h2>Meow! :3</h2>
      <S.Foto src={data} alt="nome" />
      <S.Botao onClick={() => {CatsApi();}}>
        +1 Catinho!
      </S.Botao>
    </S.Caixa>
  )
}
