import { styled } from 'styled-components'

export const ContactViewContainer = styled.div`
    height: fit-content;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`

export const ContactViewBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-bottom: 50px;
    margin-bottom: 200px;
    hr {
        border: 0;
        clear:both;
        display:block;
        width: 25%;               
        background-color:${({theme}) => theme.colors.black};
        height: 1px;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    label {
        margin-left: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        p {
            padding: 0;
            margin: 0;
        }
    }
    input {
        border: 2px solid orange;
        width: 50vh;
        height: 25px;
        border-radius: 25px;
    }
    #description {
        height: 250px;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        input {
            width: 40vh;
        }
    }
`
