import { ResultsStyled } from "./styled"
import { useFormContext } from "../../Hooks/FormContext"
import { useState } from "react"
export const Resultados =()=> {

    const {
        valuesApi,
        valorTomorrow,
        valor15Dias,
        valor30Dias,
        valor90Dias,
    } = useFormContext()

    const dia01 = (Object.values(valuesApi)[0]) !== undefined? 
    Object.values(valuesApi)[0] : "";
    const dia15 = (Object.values(valuesApi)[1]) !== undefined?
     Object.values(valuesApi)[1] : "";
    const dia30 = (Object.values(valuesApi)[2]) !== undefined?
     Object.values(valuesApi)[2] : "";
    const dia90 = (Object.values(valuesApi)[3]) !== undefined?
     Object.values(valuesApi)[3] : "";


    console.log(valuesApi);
    console.log(valorTomorrow);
        
    return (
        <ResultsStyled>
        <div>

        <h1>VOCÊ RECEBERÁ:</h1>
    
        <h2>Amanhã: {`R$` + dia01}</h2>
        <h2>Em 15 dias: {`R$` +dia15} </h2>
        <h2>Em 30 dias: {`R$` + dia30}</h2>
        <h2>Em 90 dias: {`R$` + dia90}</h2>
        </div>
      
        </ResultsStyled>
    )
}