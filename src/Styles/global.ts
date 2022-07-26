import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{}

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        -webkit-font-smoothing: antialisied;
    }

    
`;
