import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
      scroll-behavior: smooth;
      position: relative;
    min-height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        width: 100%;
        background-color: #FCF6F5;
    }
    img {
        pointer-events: none;
    }
    
`

export const SectionTitle = styled.p`
        display: flex;
        justify-content: center;
        pointer-events: none;
        font-size: 25px;
        font-weight: bold;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`