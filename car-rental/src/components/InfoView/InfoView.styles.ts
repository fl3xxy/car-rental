import { styled } from 'styled-components'

export const InfoViewContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    .view-cont {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

    }
`

export const InfoViewBox = styled.div`
    height: 450px;
    width: 350px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    border: 2px dashed #ff8c00;
    transition: all 1s;
    @media (max-width: ${({theme}) => theme.mobile}) {
        & {
            width: 330px;
        }
    }
    .icon-box {
        height: fit-content;
        max-height: 20px;
        padding: 15px;
        border-radius: 25px;
        margin: 30px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        pointer-events: none;
        p {
            font-size: 15px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: ${({theme}) => theme.colors.white};
            font-weight: bold;
        }
    }
    .icon-box-f {
        background-color: #ffbf00;
    }
    .icon-box-s {
        background-color: #c46210;
    }
    .icon-box-t {
        background-color: #e86100;
    }
    .icon-box-fo {
        background-color: #ff4f00;
    }
    .info-text {
        color: ${({theme}) => theme.colors.black};
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        padding: 0 20px;
        pointer-events: none;
    }

    &:hover {
        opacity: 0.7;
        scale: 1.01;
    }

`