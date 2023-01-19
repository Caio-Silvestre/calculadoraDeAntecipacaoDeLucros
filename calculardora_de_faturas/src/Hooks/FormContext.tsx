import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IFormRegister } from "../Components/Formulário";
import { api } from "../service/api";


interface IFormProviderProps {
    children : ReactNode
}
interface IFormContext {
    calculatePayments(data: IFormRegister): Promise<void>
    valuesApi: object
    valorTomorrow: string
    valor15Dias: string
    valor30Dias: string
    valor90Dias: string
}

const FormContext = createContext<IFormContext>({} as IFormContext);


export const FormProvider = ({children}: IFormProviderProps) => {
    const [valuesApi, setValuesApi] = useState([]);
    const [valorTomorrow, setValorTomorrow] = useState("");
    const [valor15Dias, setValor15Dias] = useState("");
    const [valor30Dias, setValor30Dias] = useState("");
    const [valor90Dias, setValor90Dias] = useState("");
    
    
    async function calculatePayments(data: IFormRegister){
        
        const valueValorVenda = (data.valorVenda);
        const valueParcelas = (data.parcelas);
        const valueMdr = (data.mdr);
        const handleData = {
            amount: valueValorVenda,
	        installments: valueParcelas,
	        mdr: valueMdr
        }
        
        await api
        .post("",handleData)
        .then((response) =>{ 
            setValuesApi(response.data);
            // setValorTomorrow(Object.values(valuesApi)[0]);
            // setValor15Dias(Object.values(valuesApi)[1]);
            // setValor30Dias(Object.values(valuesApi)[2]);
            // setValor90Dias(Object.values(valuesApi)[3]);
            toast.success("Resultados disponíveis");
        })
        .catch((error) => {
            console.log(error)
            toast.error(`Algo deu errado, tente novamente` );
        })
        return console.log(valorTomorrow, valor15Dias, valor30Dias, valor90Dias);
            }
    return (
        <FormContext.Provider value={{
            calculatePayments,
            valuesApi,
            valorTomorrow,
            valor15Dias,
            valor30Dias,
            valor90Dias,
        }}>

            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(): IFormContext {
    const context = useContext(FormContext);

    return context
}