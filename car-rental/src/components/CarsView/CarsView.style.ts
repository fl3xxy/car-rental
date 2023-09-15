import { styled } from "styled-components"

export const CarsViewContainer = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
`

export const CarsViewBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    hr {
        border: 0;
        clear:both;
        display:block;
        width: 96%;               
        background-color:${({theme}) => theme.colors.gray};
        height: 1px;
    }

    li {
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 50px;
        border-bottom: 1px solid gray;
        transition: all 1s;
        @media (max-width: ${({theme}) => theme.mobile}) {
        & {
            width: 340px;
        }
    }
        &:hover {
            scale: 1.01;
            img {
                opacity: 0.8;
            }
        }
        img {
            height: 240px;
            width: 350px;
            border-radius: 20px 20px 0 0;
            @media (max-width: ${({theme}) => theme.mobile}) {
                & {
                    width: 340px;
                }
            }
        }
        .car-first-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            pointer-events: none;
            p {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .car-year {
                border: 2px dashed orange;
                border-radius: 10px;
                padding: 5px 5px;
            }
        }
        .car-second-section {
            display: flex;
            align-items: center;
            justify-content: space-around;
            pointer-events: none;

            .c-sec-sect {
                display: flex;
                flex-direction: column;
                align-items: center;
                div {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    p {
                        font-size: 15px;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        color: ${({theme}) => theme.colors.gray};
                    }
                }
            }
        }
        .car-third-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 20px;

            span {
                pointer-events: none;
                font-size: 17px;
                font-weight: bold;
            }
            p {
                pointer-events: none;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
        }
    }
`

export const RentBtn = styled.button`
    border: none;
    text-decoration: none;
    background-color: ${({theme}) => theme.colors.orange};
    color: ${({theme}) => theme.colors.white};
    padding: 10px 15px;
    border-radius: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid orange;
    cursor: pointer;
    transition: all 1s;
    &:hover {
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.orange};
    }
`

export const CarDetailContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 248, 255, 0.75);
`

export const CarDetailBox = styled.div`
    height: 300px;
    width: 900px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    justify-content: space-around;
    hr {
        border: 0;
        clear:both;
        display:block;
        width: 98%;               
        background-color:${({theme}) => theme.colors.gray};
        height: 1px;
    }
    .detail-close {
        display: flex;
        justify-content: end;
        margin-right: 25px;
        i {
            cursor: pointer;
        }
        i:hover {
            scale: 1.05;
        }
    }
    .detail-container {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        @media (max-width: 950px) {
            flex-direction: column;
        }
    }
    .display {
        display: flex;
        flex-direction: column;
    }
    label {
        margin-left: 15px;
        display: flex;
        align-items: center;
        gap: 5px;
        p {
            font-size: 18px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: bold;
            margin: 10px 0;
        }
    }
    input[type="text"], input[type="date"] {
        width: 250px;
        height: 45px;
        border-radius: 15px;
    }
    @media (max-width: 950px) {
        width: 80%;
        height: 60%;
    }
`

export const OrderBtn = styled.button`
    border: none;
    text-decoration: none;
    background-color: #1E90FF;
    color: ${({theme}) => theme.colors.white};
    padding: 10px 15px;
    border-radius: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid #1E90FF;
    cursor: pointer;
    transition: all 1s;
    &:hover {
        background-color: ${({theme}) => theme.colors.white};
        color: #1E90FF;
    }
`