import { styled } from 'styled-components'

export const AboutViewContainer = styled.div`
    min-height: fit-content;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`

export const AboutViewBox = styled.div`
    display: flex;
    height: 100%;
    .viewbox-left {
        width: 50%;
        img {
            width: 100%;
            max-height: 500px;
            height: fit-content;
        }
    }
    .viewbox-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        .buttons {
            margin-left: 20px;
            display: flex;
            gap: 50px;
            button {
                border: none;
                background-color: #FCF6F5;
                font-family: 'Courier New', Courier, monospace;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    scale: 1.01;
                }
            }
            button.active {
                border-bottom: 2px solid black;
            }
        }

    }
    .viewbox-text {
        margin: 0 20px;
        pointer-events: none;
        span { 
            color: ${({theme}) => theme.colors.gray};

        }
    }
    @media (max-width: 1000px) {
        & {
            flex-direction: column;
        }
        .viewbox-left {
            width: 100%;
            height: 50%;
        }
        .viewbox-right {
            width: 100%;
            height: 50%;
        }

    }
`