import styled from "styled-components"

export const ResultsStyled = styled.div`
font-size: 0.5em;
background-color: rgb(240,240,240);
width: 10rem;
height: 15rem;
gap: 1rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 0px 10px 10px 0px;
box-shadow: 5px -6px 5px 0px rgba(0,0,0,0.75)

div{
    height: 80%;
}
h1 {
    border-bottom: 0.1em solid rgb(200, 200, 200);
    color:rgb(0,90,300);
    font-style: italic;
    margin-bottom: 1rem;
}
h2{

    margin-bottom: 1rem;
    color:rgb(0,180,300)
}
`