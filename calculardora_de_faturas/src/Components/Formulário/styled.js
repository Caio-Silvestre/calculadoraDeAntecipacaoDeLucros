import styled from "styled-components"

export const FormStyled = styled.form`
    background-color: white;
    width: 16rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
    padding: 1rem;
    border-radius: 10px 0px 0px 10px;
  
    label {
        font-weight: 500;
        color: rgb(50,50,50);
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.2rem;
        height: 5rem;
        }
    input{
        height: 1.2rem;
        margin: 0px;
    }
        input::placeholder { 
            color: grey;
            opacity: 50%;
            font-size: smaller;
            }
    p{
        font-size: 0.7rem;
        margin: 0;
        opacity: 50%;
    }
    span {
        color: red;
        opacity: 80%;
        font-size: smaller;
        margin: 0;
    }
`
