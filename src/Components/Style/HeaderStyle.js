import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bloco = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    background-color: #fefae0;
`

export const Navigation = styled.nav `
    width: 70%;
    height: 7vh;
    display: flex;
`

export const Lista = styled.ul `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    li{
        width: 40%;
        text-align: center;
    }
`

export const SLink = styled(Link)`
    color: black;
    
    &:hover {
        color: #e71d36;
        font-size: 17px;
    }
`