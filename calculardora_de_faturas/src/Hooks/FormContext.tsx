import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IFormRegister } from "../Components/Formulário";

interface IFormProviderProps {
    children : ReactNode
}
interface IFormContext {
    calculatePayments(data: IFormRegister):void
}

const FormContext = createContext<IFormContext>({} as IFormContext);


export const FormProvider = ({children}: IFormProviderProps) => {
    const [values, setValues] = useState([]);

    const calculatePayments = (data: IFormRegister):void => {
        const valueValorVenda = (data.valorVenda);
        const valueParcelas = (data.parcelas);
        const valueMdr = (data.mdr);
        toast.success("Deu boa magrão!");
        return console.log( valueValorVenda, 
                            valueParcelas, 
                            valueMdr)
    }
    return (
        <FormContext.Provider value={{
            calculatePayments
        }}>

            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(): IFormContext {
    const context = useContext(FormContext);

    return context
}