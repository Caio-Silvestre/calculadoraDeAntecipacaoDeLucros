import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IFormRegister } from "../Components/Formulário";
import { api } from "../service/api";

interface IFormProviderProps {
    children : ReactNode
}
interface IFormContext {
    calculatePayments(data: IFormRegister):void
    valuesApi: object
}

const FormContext = createContext<IFormContext>({} as IFormContext);


export const FormProvider = ({children}: IFormProviderProps) => {
    const [valuesApi, setValuesApi] = useState([]);
    // const [valorTomorrow, setValorTomorrow] = useState({});
    // const [valor15Dias, setValor15Dias] = useState(0);
    // const [valor30Dias, setValor30Dias] = useState(0);
    // const [valor90Dias, setValor90Dias] = useState(0);

    const calculatePayments = (data: IFormRegister):void => {
        
        const valueValorVenda = (data.valorVenda);
        const valueParcelas = (data.parcelas);
        const valueMdr = (data.mdr);
        const handleData = {
            amount: valueValorVenda,
	        installments: valueParcelas,
	        mdr: valueMdr
        }
      
        api
        .post("",handleData)
        .then((response) =>{ 
            setValuesApi(response.data);
            toast.success("Resultados disponíveis");
        })
        .catch((error) => {
            console.log(error)
            toast.error(`Algo deu errado, tente novamente` );
        })
        return console.log(valuesApi)
    }
    return (
        <FormContext.Provider value={{
            calculatePayments,
            valuesApi
        }}>

            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(): IFormContext {
    const context = useContext(FormContext);

    return context
}