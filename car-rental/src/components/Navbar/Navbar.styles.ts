import { Link } from "react-router-dom";
import { styled } from "styled-components";



export const NavbarContainer = styled.header`
    background-color: ${({theme}) => theme.colors.white};
    height: 64px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 30;
    &.scrolled {
        opacity: 0.9;
        height: 50px;
        transition: all 0.5s;
    }
    .leftSection {
        display: flex;
        align-items: center;
        .logo {
            font-family: 'Russo One', sans-serif;
            font-size: 22px;
            font-weight: bold;
            pointer-events: none;
        }
    }

    .rightSection {
        display: flex;
        gap: 64px;
    }

    .toogleBtn {
        display: none;
        cursor: pointer;
        z-index: 3000;
    }
    a {
        color: ${({theme}) => theme.colors.gray};
        text-decoration: none;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        transition: all 0.1s;
        &:hover {
            color: ${({theme}) => theme.colors.orange};
            scale: 1.05;
        }
        &:active {
            scale: 1;
        }
        @media(max-width: ${({theme})  => theme.mobile}) {
            color: ${({theme}) => theme.colors.white};

        }
    }
    @media  (max-width: ${({theme})  => theme.tablet}) {
        & {
            padding: 0 30px;
        }
        .leftSection .logo{
            font-size: 20px;
        }
        .rightSection {
            gap: 48px;
        }
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        & {
            padding: 0 15px;
        }
        .leftSection .logo{
            font-size: 18px;
        }
        .rightSection {
            background-color: ${({theme}) => theme.colors.black};
            height: 100%;
		    width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            right: -200vh;
		    top: 0;
            transition: 1.25s;

            &.active {
                transform: translateX(-200vh);
            }
        }
        .toogleBtn{
            display: flex;
            color: ${({theme}) => theme.colors.gray};

        }
    }
`