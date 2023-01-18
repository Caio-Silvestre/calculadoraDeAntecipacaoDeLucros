import { ResultsStyled } from "./styled"
import { useFormContext } from "../../Hooks/FormContext"

export const Resultados =()=> {
    const {valuesApi} = useFormContext()
    console.log(valuesApi);
    
    return (
        <ResultsStyled>
        <div>

        <h1>VOCÊ RECEBERÁ:</h1>
    
        <h2>Amanhã:</h2>
        <h2>Em 15 dias: </h2>
        <h2>Em 30 dias: </h2>
        <h2>Em 90 dias: </h2>
        </div>
      
        </ResultsStyled>
    )
}