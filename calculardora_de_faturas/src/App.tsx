import React from 'react';
import './App.css';
import { FormProvider } from './Hooks/FormContext';
import { Form } from './Components/Formulário';
import { Resultados } from './Components/Resultados'; 
import { Main } from './styled';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
function App() {
  return (
    <>
    <FormProvider>
  <div className="App">
      <header>
        <h1>
          Calculadora de recebimento de Parcelas
        </h1>      
         
      </header>
    <Main>

    <Form/>
    <Resultados/>
    </Main>
    </div>
  </FormProvider>
    <ToastContainer/>
    </>
  );
}

export default App;
