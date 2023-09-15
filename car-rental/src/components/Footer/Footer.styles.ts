import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
    height: fit-content;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    a {
        color: ${({theme}) => theme.colors.white};
    }
    p {
        color: ${({theme}) => theme.colors.white};
    }
    .left-footer {
        display: flex;
        align-items: center;
        p {
            font-family: 'Russo One', sans-serif;
            font-size: 22px;
            font-weight: bold;
            pointer-events: none;
        }
    }
    .middle-footer {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .right-footer {
        pointer-events: none;
        p {
            color: ${({theme}) => theme.colors.gray};
            font-size: 15px;
        }
    }
`
