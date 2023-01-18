import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {useFormContext} from "../../Hooks/FormContext"
import { FormStyled } from "./styled";
import { toast } from "react-toastify";
import { useState } from "react";
import { formSchema } from "../../validators";

export interface IFormRegister {
    valorVenda: number;
    parcelas: number;
    mdr: number; 
}

export const Form =()=> {

    const {calculatePayments} = useFormContext() 
   
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
                <input type="number" placeholder={"Valor da venda"}{...register("valorVenda")} />
                <span style={{ color: "red"}}>{(errors.valorVenda?.message)}</span>
            </label>
            <label>
                Em quantas parcelas
                <input placeholder={"Quantidade de parcelas"} type="number" {...register("parcelas")} />
                <p> Máximo de 12 parcelas</p>
                <span style={{ color: "red"}}>{errors.parcelas?.message}</span>            
            </label>
            <label>
                Informe o percentual de MDR
                <input type="number"  placeholder={"Percentual de MDR"} {...register("mdr")} />

                <span style={{ color: "red"}}>{errors.mdr?.message}</span>
            </label>
            <button type="submit">Calcular</button>
        </FormStyled>
         
    </div>)
}