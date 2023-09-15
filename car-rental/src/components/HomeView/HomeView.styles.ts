import { styled } from "styled-components";

export const HomeViewContainer = styled.div`
    min-height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .cars {
        width: 70%;
        height: 280px;
        margin-top: 100px;
        transition: all 2s;

        @media  (max-width: 1200px) {
            & {
                display: none;
            }
        }

    }

    .homeViewBox {
        margin-top: 100px;
        display: flex;
        align-items: center;
        width: 80%;
        gap: 30px;
        @media  (max-width: 1400px) {
            width: 90%;
        }
        @media  (max-width: 1200px) {
            width: 98%;
            flex-direction: column;
        }
        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 100%;
        }
    }
    
    .homeViewLeft {
        background-color: ${({theme}) => theme.colors.white};
        width: 50%;
        height: 350px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        pointer-events: none;
        
        h1 {
            padding-left: 20px;
            font-family: 'Roboto Mono', monospace;
            font-weight: bold;
            span {
                color: ${({theme}) => theme.colors.orange};
            }
        }
        p {
            padding-left: 20px;
            font-size: 18px;
        }
        @media  (max-width: 1200px) {
            & {
                width: 80%;
                justify-content: space-around;
            }
        }
        @media  (max-width: 750px) {
                & {
                    width: 90%;
                }
            }
        @media  (max-width: 650px) {
                & {
                    width: 98%;
                }
            }
        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 100%;
        }
        @media (max-width: 750px) {
            h1 {
                font-size: 28px;
            }
            p {
                font-size: 15px;
            }
        }
        @media (max-width: ${({theme}) => theme.mobile}) {
            h1 {
                font-size: 24px;
            }
            p {
                font-size: 13px;
            }
        }
    }
    
    .appImg {
        display: flex;
        align-items: center;
        gap: 5px;
        .google {
            height: 100px;
        }
        .apple {
            height: 66px;
        }
        @media (max-width: 750px) {
            .google {
                height: 90px;
            }
            .apple {
                height: 60px;
            }
        }
        @media (max-width: ${({theme}) => theme.mobile}) {
            .google {
                height:60px;
            }
            .apple {
                height: 40px;
            }
        }
    }

    .homeViewRight {
        background-color: ${({theme}) => theme.colors.white};
        width: 50%;
        height: 250px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .rent-car-text {
            margin: 0;
            margin-top: 40px;
            font-size: 18px;
            font-family: 'Roboto Mono', monospace;
            font-weight: bold;
            pointer-events: none;
        }
        .view-all {
            margin-bottom: 10px;
            text-decoration: none;
            color: ${({theme}) => theme.colors.orange};
            border-bottom: 1px solid orange;
            font-size: 14px;
        }
        span {
            font-size: 14px;
            pointer-events: none;
            color: ${({theme}) => theme.colors.gray};
        }

        .homeRightBox {
            padding: 0 35px;
            display: flex;
            align-items: center;
            gap: 20px;
            .input-box {
                display: flex;
                flex-direction: column;
            }
            .input-box input {
                width: 120px;
                height: 30px;
                border: none;
                border-radius: 5px;
                background-color: lightgray;
                cursor: pointer;
            }
            .submitBtn {
                width: 125px;
                height: 36px;
                border: none;
                border-radius: 25px;
                background-color: ${({theme}) => theme.colors.orange};
                color: ${({theme}) => theme.colors.white};
                font-family: 'Roboto Mono', monospace;
                font-weight: bold;
                cursor: pointer;
                transition: all 1s;
            }
            .submitBtn:hover {
                background-color: ${({theme}) => theme.colors.white};
                border: 1px solid orange;
                color: ${({theme}) => theme.colors.orange};
                scale: 1.05;
            }
            .submitBtn:active {
                scale: 1;
            }
            @media  (max-width: 650px) {
                .input-box input {
                    width: 110px;
                }
                .submitBtn {
                    width: 115px;
                }
            }
            @media  (max-width: 580px) {
                & {
                    gap: 10px;
                    padding: 0 20px;
                }
                .input-box input {
                    width: 100px;
                }
                span {
                    font-size: 13px;
                }
                .submitBtn {
                    width: 105px;
                }
            }
            @media (max-width: ${({theme}) => theme.mobile}) {
                .input-box input {
                    width: 85px;
                }
                span {
                    font-size: 11px;
                }
                .submitBtn {
                    width: 90px;
                }
            }
            @media (max-width: 450px) {
                & {
                    padding: 0;
                }
                .input-box input {
                    width: 85px;
                }
                span {
                    font-size: 11px;
                }
                .submitBtn {
                    width: 90px;
                }
            }
        }
        @media  (max-width: 1200px) {
                & {
                    width: 80%;
                }
            }
        @media  (max-width: 750px) {
                & {
                    width: 90%;
                }
            }
        @media  (max-width: 650px) {
                & {
                    width: 98%;
                }
            }
        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 100%;
        }
    }
`