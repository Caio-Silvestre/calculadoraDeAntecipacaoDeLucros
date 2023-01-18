import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {useFormContext} from "../../Hooks/FormContext"
import { FormStyled } from "./styled";
import { toast } from "react-toastify";
import { useState } from "react";


export interface IFormRegister {
    valorVenda: number;
    parcelas: number;
    mdr: number; 
}

export const Form =()=> {
    // const notify = (message:string) =>{
    //     toast(message, {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         });}
    const {calculatePayments} = useFormContext() 
    const formSchema = yup.object().shape({
        valorVenda: yup
          .number()
          .typeError("Insira um número válido")
          .required("Valor é Obrigatório")
          .min(1, "Insira o valor da venda"),
          parcelas: yup
          .number()
          .typeError("Insira um número válido")
          .required("Valor é Obrigatório")
          .min(1, "Insira uma quatidade de meses válida")
          .max(12, "Quantidade máxima de 12 meses"),
          mdr: yup
          .number()
          .typeError("Insira um número válido")
          .min(1, "Insira uma quatidade válida")
          .required("Insira a porcentagem de mdr (Ex: 3)"),
      });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormRegister>({
        resolver: yupResolver(formSchema),
    });
   

        
      
    return( 
    <div>
        <FormStyled className="form" onSubmit={handleSubmit(calculatePayments)}>
            <label>
                Informe o valor da venda
                <input type="number" placeholder={errors.valorVenda?.message}{...register("valorVenda")} />
                <span style={{ color: "red"}}>{toast.error(errors.valorVenda?.message)}</span>
            </label>
            <label>
                Em quantas parcelas
                <input placeholder={errors.parcelas?.message} type="number" {...register("parcelas")} />
                <p> Máximo de 12 parcelas</p>
                <span style={{ color: "red"}}>{errors.parcelas?.message}</span>            
            </label>
            <label>
                Informe o percentual de MDR
                <input type="number"  placeholder={errors.valorVenda?.message} {...register("mdr")} />

                <span style={{ color: "red"}}>{errors.mdr?.message}</span>
            </label>
            <button type="submit">Calcular</button>
        </FormStyled>
         
    </div>)
}